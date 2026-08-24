import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

function Register() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/auth/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        },
      );

      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.message || "Ошибка регистрации");
      }
      localStorage.setItem("access_token", result.access_token);
      navigate("/");
    } catch (error) {
      setError("root.serverError", {
        type: "manual",
        message: error.message,
      });
    } finally {
      console.log("ok");
    }
  };
  const passwordWatch = watch("password");
  return (
    <div>
      <form
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit(onSubmit)}
      >
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

        <button type="submit">Регистрация</button>
      </form>
    </div>
  );
}

export default Register;
