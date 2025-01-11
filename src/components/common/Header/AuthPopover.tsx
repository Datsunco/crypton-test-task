"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

// hooks
import { useLoginFormik, useRegisterFormik } from "@/hooks/authForm";
import { useGetProfileQuery } from "@/store/apiSlice";

// components
import { Avatar } from "@/components/ui/avatar";
import UserPopover from "./UserPopover";
import GuestPopover from "./GuestPopover";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// types
import { ProfileData } from "@/types/auth";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const AuthPopover: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);
  const [loginOpened, setLoginOpened] = useState(false);
  const [regOpened, setRegOpened] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    data,
    isFetching,
    refetch: fetchData,
    error,
  } = useGetProfileQuery(undefined, {
    skip: !token,
  });

  const loginFormik = useLoginFormik(
    setIsLoading,
    (token: string) => setToken(token),
    () => setLoginOpened(false),
  );
  const registerFormik = useRegisterFormik(setIsLoading, () =>
    setRegOpened(false),
  );

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    setToken(savedToken);
  }, []);

  useEffect(() => {
    if (token) fetchData();
  }, [fetchData, token]);

  useEffect(() => {
    if (data && token) {
      setProfileData(data);
    }
  }, [data, token]);

  useEffect(() => {
    if (error) handleLogout();
  }, [error]);

  const handleLogout = () => {
    setProfileData(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="flex h-12 w-12 items-center justify-center text-muted-foreground bg-muted border-2">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={20}
        align="end"
        className="rounded-2xl shadow-[0_0_16px_rgba(0,0,0,0.1)]"
      >
        {isFetching ? (
          <div className="flex w-full h-[200px] justify-center items-center">
            <Image
              alt="Loading"
              width="64"
              height="64"
              src={"/loader.svg"}
              className="animate-spin"
            />
          </div>
        ) : profileData ? (
          <UserPopover profileData={profileData} onLogout={handleLogout} />
        ) : (
          <GuestPopover
            loginOpened={loginOpened}
            setLoginOpened={setLoginOpened}
            regOpened={regOpened}
            setRegOpened={setRegOpened}
            isLoading={isLoading}
            loginFormik={loginFormik}
            registerFormik={registerFormik}
          />
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AuthPopover;
