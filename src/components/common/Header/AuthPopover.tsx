"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import { useFormik } from "formik";
import * as Yup from "yup";

// api
import {
  useGetProfileQuery,
  useLoginMutation,
  useRegisterMutation,
} from "@/store/apiSlice";

// components
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

// icons
import { Heart, LogOut, Package, ShoppingCart } from "lucide-react";

// types
import { ProfileData } from "@/types/auth";

const AuthPopover = () => {
  const [token, setToken] = useState<string | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  const [loginOpened, setLoginOpened] = useState(false);
  const [regOpened, setRegOpened] = useState(false);

  const [isLoading, setIsLoading] = useState(false);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const {
    data,
    isFetching,
    refetch: fetchData,
  } = useGetProfileQuery(undefined, {
    skip: !token,
  });

  const handleRegClick = () => {
    setLoginOpened(false);
    setRegOpened(true);
  };

  const handleLoginClick = () => {
    setRegOpened(false);
    setLoginOpened(true);
  };

  const handleCloseDialogs = () => {
    setRegOpened(false);
    setLoginOpened(false);
  };

  const handleLogount = () => {
    setProfileData(null);
    setToken(null);
    localStorage.removeItem("token");
  };

  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      general: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Неверный формат email")
        .required("Email обязателен"),
      password: Yup.string().required("Пароль обязателен"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        setIsLoading(true);
        const response = await login(values).unwrap();

        setToken(response.token);
        localStorage.setItem("token", response.token);

        handleCloseDialogs();
      } catch (error: unknown) {
        if (typeof error === "object" && error !== null && "data" in error) {
          const errorData = error as {
            status: number;
            data: { code: string; message: string };
          };
          setErrors({
            general: `Ошибка авторизации. ${errorData.data.message}`,
          });
          console.error("Login failed:", errorData);
        } else {
          setErrors({
            general: "Неизвестная ошибка. Пожалуйста, попробуйте позже.",
          });
          console.error("Login failed:", error);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

  const registerFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      general: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Неверный формат email")
        .required("Email обязателен"),
      password: Yup.string().required("Пароль обязателен"),
    }),
    onSubmit: async (values, { setErrors }) => {
      try {
        setIsLoading(true);
        const response = await register(values).unwrap();

        setToken(response.token);
        localStorage.setItem("token", response.token);

        handleCloseDialogs();
      } catch (error: unknown) {
        if (typeof error === "object" && error !== null && "data" in error) {
          const errorData = error as {
            status: number;
            data: { code: string; message: string };
          };
          setErrors({
            general: `Ошибка авторизации. ${errorData.data.message}`,
          });
          console.error("Login failed:", errorData);
        } else {
          setErrors({
            general: "Неизвестная ошибка. Пожалуйста, попробуйте позже.",
          });
          console.error("Login failed:", error);
        }
      } finally {
        setIsLoading(false);
      }
    },
  });

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

  return (
    <Popover>
      <PopoverTrigger>
        <Avatar className="w-12 h-12 border-solid border-2">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
      </PopoverTrigger>
      <PopoverContent
        sideOffset={20}
        align="end"
        className="rounded-2xl shadow-[0_0_16px_rgba(0,0,0,0.1)]"
      >
        {!isFetching ? (
          profileData ? (
            <div className="flex flex-col">
              <div className="px-4 pb-4">
                <div className="flex items-center justify-between">
                  <p className="w-40 h-4 text-sm font-medium text-muted-foreground overflow-hidden">
                    {profileData?.id}
                  </p>
                  <Avatar className="w-12 h-12 border-solid border-2">
                    <AvatarImage src="/placeholder-user.jpg" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </div>
                <p className="text-sm text-muted-foreground">
                  {profileData.email}
                </p>
              </div>
              <div className="border-t">
                <div className=" flex flex-col">
                  <Button
                    variant="ghost"
                    className="flex justify-start gap-2 rounded-none px-4 py-2"
                  >
                    <Package className="h-4 w-4" />
                    Заказы
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex justify-start gap-2 rounded-none px-4 py-2"
                  >
                    <Heart className="h-4 w-4" />
                    Избранное
                  </Button>
                  <Button
                    variant="ghost"
                    className="flex justify-start gap-2 rounded-none px-4 py-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    Корзина
                  </Button>
                </div>
              </div>
              <div className="border-t p-2">
                <Button
                  variant="ghost"
                  className="flex w-full justify-start gap-2 px-2 text-muted-foreground"
                  onClick={handleLogount}
                >
                  <LogOut className="h-4 w-4" />
                  Выйти
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-full flex flex-row justify-between items-center">
                  <div className="text-base font-medium">Гость</div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2">
                    <Avatar className="h-6 w-6 text-muted-foreground">
                      <AvatarImage src="/placeholder-user.jpg" />
                      <AvatarFallback>U</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <p className="text-sm text-start text-muted-foreground">
                  Перед началом покупок нужно авторизироваться
                </p>
              </div>
              <div className="flex w-full flex-col gap-2">
                <Dialog open={loginOpened} onOpenChange={setLoginOpened}>
                  <DialogTrigger asChild>
                    <Button className="w-full">Войти</Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-3xl">
                    <div className="flex flex-col items-center gap-4">
                      <div className="mt-2 text-center font-bold tracking-tight">
                        ENVV
                        <div className="text-sm font-normal">JEWELRY</div>
                      </div>
                      <div className="w-full space-y-2">
                        <h2 className="text-center text-xl font-semibold tracking-tight mb-6">
                          ВОЙДИТЕ В СВОЙ АККАУНТ ENVV
                        </h2>

                        <form
                          onSubmit={loginFormik.handleSubmit}
                          className="flex flex-col gap-2"
                        >
                          <Input
                            id="11"
                            type="email"
                            name="email"
                            placeholder="Ваш email"
                            className="bg-muted rounded-xl"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.email}
                          />
                          {loginFormik.touched.email &&
                          loginFormik.errors.email ? (
                            <div className="text-red-500">
                              {loginFormik.errors.email}
                            </div>
                          ) : null}
                          <Input
                            id="12"
                            type="password"
                            name="password"
                            placeholder="Ваш пароль"
                            className="bg-muted rounded-xl"
                            onChange={loginFormik.handleChange}
                            onBlur={loginFormik.handleBlur}
                            value={loginFormik.values.password}
                          />
                          {loginFormik.touched.password &&
                          loginFormik.errors.password ? (
                            <div className="text-red-500">
                              {loginFormik.errors.password}
                            </div>
                          ) : null}

                          {loginFormik.errors.general && (
                            <div className="text-red-500">
                              {loginFormik.errors.general}
                            </div>
                          )}
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="mt-2"
                          >
                            {isLoading ? (
                              <Image
                                alt="my profile"
                                width="32"
                                height="32"
                                src={"/loader.svg"}
                                className="animate-spin"
                              />
                            ) : (
                              "ВОЙТИ"
                            )}
                          </Button>
                        </form>
                        <Button
                          variant="ghost"
                          className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4"
                          onClick={handleRegClick}
                        >
                          ЗАРЕГИСТРИРОВАТЬСЯ
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
                <Dialog open={regOpened} onOpenChange={setRegOpened}>
                  <DialogTrigger asChild>
                    <Button variant="secondary" className="w-full">
                      Зарегистрироваться
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="rounded-3xl">
                    <div className="flex flex-col items-center gap-4">
                      <div className="mt-2 text-center font-bold tracking-tight">
                        ENVV
                        <div className="text-sm font-normal">JEWELRY</div>
                      </div>
                      <div className="w-full space-y-2">
                        <h2 className="text-center text-xl font-semibold tracking-tight mb-6">
                          СОЗДАЙТЕ СВОЙ АККАУНТ ENVV
                        </h2>

                        <form
                          onSubmit={registerFormik.handleSubmit}
                          className=" flex flex-col gap-2"
                        >
                          <Input
                            id="10"
                            type="email"
                            name="email"
                            placeholder="Ваш email"
                            className="bg-muted rounded-xl"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.email}
                          />
                          {registerFormik.touched.email &&
                          registerFormik.errors.email ? (
                            <div className="text-red-500">
                              {registerFormik.errors.email}
                            </div>
                          ) : null}
                          <Input
                            id="9"
                            type="password"
                            name="password"
                            placeholder="Ваш пароль"
                            className="bg-muted rounded-xl"
                            onChange={registerFormik.handleChange}
                            onBlur={registerFormik.handleBlur}
                            value={registerFormik.values.password}
                          />
                          {registerFormik.touched.password &&
                          registerFormik.errors.password ? (
                            <div className="text-red-500">
                              {registerFormik.errors.password}
                            </div>
                          ) : null}

                          {registerFormik.errors.general && (
                            <div className="text-red-500">
                              {registerFormik.errors.general}
                            </div>
                          )}
                          <Button
                            type="submit"
                            disabled={isLoading}
                            className="mt-2"
                          >
                            {isLoading ? (
                              <Image
                                alt="my profile"
                                width="32"
                                height="32"
                                src={"/loader.svg"}
                                className="animate-spin"
                              />
                            ) : (
                              "ЗАРЕГЕСТРИРОВАТЬСЯ"
                            )}
                          </Button>
                        </form>
                        <Button
                          variant="ghost"
                          className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4"
                          onClick={handleLoginClick}
                        >
                          Войти
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          )
        ) : (
          <div className="flex w-full h-[200px] justify-center items-center">
            <Image
              alt="my profile"
              width="64"
              height="64"
              src={"/loader.svg"}
              className="animate-spin"
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  );
};

export default AuthPopover;
