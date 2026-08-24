import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
function Login() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      const response = await fetch(
        "https://todo-redev.onrender.com/api/auth/login",
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
        throw new Error(result.message || "Ошибка входа");
      }
      localStorage.setItem("access_token", result.access_token);
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      console.log("ok");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
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

        <button type="submit">Логин</button>
      </form>
    </div>
  );
}

export default Login;
