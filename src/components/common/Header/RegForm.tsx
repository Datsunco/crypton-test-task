import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Eye, EyeOff } from "lucide-react";

interface AuthFormProps {
  formik: any;
  isLoading: boolean;
  onLoginClick: () => void;
}

const RegForm: React.FC<AuthFormProps> = ({
  formik,
  isLoading,
  onLoginClick,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false); // Состояние для управления регистрацией

  const handleLoginClick = () => {
    formik.setFieldValue("password", "");
    formik.setFieldValue("confirmPassword", "");
    setIsRegistering(false);
    onLoginClick();
  };

  const handleRegisterClick = () => {
    setIsRegistering(true);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="mt-2 text-center font-bold tracking-tight">
        ENVV
        <div className="text-sm font-normal">JEWELRY</div>
      </div>
      <div className="w-full space-y-2">
        <h2 className="text-center text-xl font-semibold tracking-tight mb-6">
          СОЗДАЙТЕ СВОЙ АККАУНТ ENVV
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
          {formik.touched.email && formik.errors.email ? (
            <div className="text-red-500">{formik.errors.email}</div>
          ) : (
            <div className="w-full h-4"></div>
          )}

          {isRegistering && (
            <>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Ваш пароль"
                  className="bg-muted rounded-xl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {formik.touched.password && formik.errors.password && (
                <div className="text-red-500">{formik.errors.password}</div>
              )}

              <div className="relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  placeholder="Подтвердите пароль"
                  className="bg-muted rounded-xl"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                />
                <button
                  type="button"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {formik.touched.confirmPassword &&
                formik.errors.confirmPassword && (
                  <div className="text-red-500">
                    {formik.errors.confirmPassword}
                  </div>
                )}
            </>
          )}

          {/* <Input
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
            */}
          {formik.errors.general && (
            <div className="text-red-500">{formik.errors.general}</div>
          )}
          <Button
            type={isRegistering ? "submit" : "button"}
            disabled={isLoading}
            className="mt-2 rounded-xl"
            onClick={handleRegisterClick}
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
              "ЗАРЕГЕСТРИРОВАТЬСЯ"
            )}
          </Button>
        </form>
        <Button
          variant="ghost"
          className="w-full font-normal hover:bg-transparent hover:underline p-0 h-4 rounded-full"
          onClick={handleLoginClick}
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default RegForm;
