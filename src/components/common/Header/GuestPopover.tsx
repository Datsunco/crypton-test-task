import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AuthForm from "./AuthForm";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface GuestPopoverProps {
  loginOpened: boolean;
  setLoginOpened: (open: boolean) => void;
  regOpened: boolean;
  setRegOpened: (open: boolean) => void;
  isLoading: boolean;
  loginFormik: any;
  registerFormik: any;
}

const GuestPopover: React.FC<GuestPopoverProps> = ({
  loginOpened,
  setLoginOpened,
  regOpened,
  setRegOpened,
  isLoading,
  loginFormik,
  registerFormik,
}) => (
  <div className="flex flex-col items-center gap-3">
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="w-full flex flex-row justify-between items-center">
        <div className="text-base font-medium">Гость</div>
        <Avatar className="flex h-12 w-12 items-center justify-center text-muted-foreground bg-muted border-2">
          <AvatarImage src="/placeholder-user.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </Avatar>
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
          <AuthForm
            title="ВОЙДИТЕ В СВОЙ АККАУНТ ENVV"
            formik={loginFormik}
            isLoading={isLoading}
            onRegClick={() => {
              setLoginOpened(false);
              setRegOpened(true);
            }}
          />
        </DialogContent>
      </Dialog>
      <Dialog open={regOpened} onOpenChange={setRegOpened}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="w-full">
            Зарегистрироваться
          </Button>
        </DialogTrigger>
        <DialogContent className="rounded-3xl">
          <AuthForm
            title="СОЗДАЙТЕ СВОЙ АККАУНТ ENVV"
            formik={registerFormik}
            isLoading={isLoading}
            onLoginClick={() => {
              setRegOpened(false);
              setLoginOpened(true);
            }}
          />
        </DialogContent>
      </Dialog>
    </div>
  </div>
);

export default GuestPopover;
