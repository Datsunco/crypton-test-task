import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface AuthFormProps {
  formik: any;
  isLoading: boolean;
  onRegClick?: () => void;
}

const AuthForm: React.FC<AuthFormProps> = ({
  formik,
  isLoading,
  onRegClick,
}) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mt-2 text-center font-bold tracking-tight">
        ENVV
        <div className="text-sm font-normal">JEWELRY</div>
      </div>
      <div className="w-full space-y-2">
        <h2 className="text-center text-xl font-semibold tracking-tight mb-6">
          ВОЙДИТЕ В СВОЙ АККАУНТ ENVV
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
          <Button
            type="submit"
            disabled={isLoading}
            className="mt-2 rounded-xl"
          >
            {isLoading ? (
              <Image
                alt="Loading"
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
        {onRegClick && (
          <Button
            variant="ghost"
            className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4 rounded-full"
            onClick={onRegClick}
          >
            ЗАРЕГИСТРИРОВАТЬСЯ
          </Button>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
