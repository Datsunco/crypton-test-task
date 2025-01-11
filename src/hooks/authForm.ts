import { useFormik } from "formik";
import * as Yup from "yup";
import { useLoginMutation, useRegisterMutation } from "@/store/apiSlice";

export const useLoginFormik = (
  setIsLoading: (loading: boolean) => void,
  setToken: (token: string) => void,
  handleCloseDialogs: () => void,
) => {
  const [login] = useLoginMutation();
  return useFormik({
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
        localStorage.setItem("token", response.token);
        setToken(response.token);

        handleCloseDialogs();
      } catch (error) {
        handleError(error, setErrors);
      } finally {
        setIsLoading(false);
      }
    },
  });
};

export const useRegisterFormik = (
  setIsLoading: (loading: boolean) => void,
  handleCloseDialogs: () => void,
) => {
  const [register] = useRegisterMutation();
  return useFormik({
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
        localStorage.setItem("token", response.token);
        handleCloseDialogs();
      } catch (error) {
        handleError(error, setErrors);
      } finally {
        setIsLoading(false);
      }
    },
  });
};

const handleError = (error: unknown, setErrors: (errors: any) => void) => {
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
};
