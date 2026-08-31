import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
function Login() {
  const BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const navigate = useNavigate();
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const response = await fetch(`${BASE_URL}/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Неверный логин или пароль");
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
  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit((data) => loginMutation.mutate(data))}
      >
        {errors.root?.serverError && (
          <p style={{ color: "red" }}>{errors.root.serverError.message}</p>
        )}
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
          })}
        />
        {errors.password && (
          <p style={{ color: "red" }}>{errors.password.message}</p>
        )}
        <button type="submit" disabled={loginMutation.isPending}>
          Логин
        </button>
      </form>
    </div>
  );
}

export default Login;
