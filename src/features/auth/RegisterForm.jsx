import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

function Register() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const registerMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${BASE_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Ошибка регистрации");
      }
      return result;
    },
    onSuccess: (result) => {
      localStorage.setItem("access_token", result.access_token);
      navigate("/");
    },
    onError: (error) => {
      setError("root.serverError", {
        type: "manual",
        message: error.message,
      });
    },
  });

  const passwordWatch = watch("password");
  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit((data) => registerMutation.mutate(data))}
      >
        {errors.root?.serverError && (
          <p style={{ color: "red" }}>{errors.root.serverError.message}</p>
        )}
        <input
          placeholder="Имя"
          {...register("name", {
            required: "Обязательное поле",
          })}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
        <input
          placeholder="Почта"
          {...register("email", {
            required: "Обязательное поле",
            pattern: {
              value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
              message: "Введите корректный email",
            },
          })}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email.message}</p>}

        <input
          type="password"
          placeholder="Пароль"
          {...register("password", {
            required: "Обязательное поле",
            validate: (value) =>
              /^(?=.*[A-Z]).{6,}$/.test(value) || "Пароль слишком слабый",
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}

        <input
          type="password"
          placeholder="Подтверждение Пароля"
          {...register("confirmPassword", {
            required: "Обязательное поле",
            validate: (value) =>
              value === passwordWatch || "Пароль должен воспадать",
          })}
        />
        {errors.confirmPassword && (
          <p style={{ color: "red" }}>{errors.confirmPassword.message}</p>
        )}

        <button type="submit" disabled={registerMutation.isPending}>
          Регистрация
        </button>
      </form>
    </div>
  );
}

export default Register;
