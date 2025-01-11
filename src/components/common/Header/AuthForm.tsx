import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface AuthFormProps {
  title: string;
  formik: any;
  isLoading: boolean;
  onRegClick?: () => void;
  onLoginClick?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  title,
  formik,
  isLoading,
  onRegClick,
  onLoginClick,
}) => (
  <div className="flex flex-col items-center gap-4">
    <div className="mt-2 text-center font-bold tracking-tight">
      ENVV
      <div className="text-sm font-normal">JEWELRY</div>
    </div>
    <div className="w-full space-y-2">
      <h2 className="text-center text-xl font-semibold tracking-tight mb-6">
        {title}
      </h2>
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-2">
        <Input
          type="email"
          name="email"
          placeholder="Ваш email"
          className="bg-muted rounded-xl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500">{formik.errors.email}</div>
        )}
        <Input
          type="password"
          name="password"
          placeholder="Ваш пароль"
          className="bg-muted rounded-xl"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="text-red-500">{formik.errors.password}</div>
        )}
        {formik.errors.general && (
          <div className="text-red-500">{formik.errors.general}</div>
        )}
        <Button type="submit" disabled={isLoading} className="mt-2">
          {isLoading ? (
            <Image
              alt="Loading"
              width="32"
              height="32"
              src={"/loader.svg"}
              className="animate-spin"
            />
          ) : title.includes("ВОЙДИТЕ") ? (
            "ВОЙТИ"
          ) : (
            "ЗАРЕГЕСТРИРОВАТЬСЯ"
          )}
        </Button>
      </form>
      {onRegClick && (
        <Button
          variant="ghost"
          className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4"
          onClick={onRegClick}
        >
          ЗАРЕГИСТРИРОВАТЬСЯ
        </Button>
      )}
      {onLoginClick && (
        <Button
          variant="ghost"
          className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4"
          onClick={onLoginClick}
        >
          Войти
        </Button>
      )}
    </div>
  </div>
);

export default AuthForm;
