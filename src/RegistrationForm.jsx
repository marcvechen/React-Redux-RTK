import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack"; // Імпортуємо компонент для вертикального вишиковування

function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const passwordWatch = watch("password");

  return (
    <Box sx={{ maxWidth: 300, mx: "auto", mt: 4, p: 2 }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TextField
            label="Имя"
            variant="outlined"
            fullWidth
            {...register("name", {
              required: "Обязательное поле",
            })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />

          <TextField
            label="Почта"
            variant="outlined"
            fullWidth
            {...register("email", {
              required: "Обязательное поле",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Введите корректный email",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />

          <TextField
            label="Пароль"
            type="password"
            variant="outlined"
            fullWidth
            {...register("password", {
              required: "Обязательное поле",
              validate: (value) =>
                /^(?=.*[A-Z]).{6,}$/.test(value) || "Пароль слишком слабый",
            })}
            error={!!errors.password}
            helperText={errors.password?.message}
          />

          <TextField
            label="Подтвердите пароль"
            type="password"
            variant="outlined"
            fullWidth
            {...register("confirmPassword", {
              required: "Обязательное поле",
              validate: (value) =>
                value == passwordWatch || "Пароли не совпадают",
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />

          <TextField
            type="date"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }}
            {...register("age", {
              required: "Обязательное поле",
              validate: (value) => {
                const birthDate = new Date(value);
                const today = new Date();
                let age = today.getFullYear() - birthDate.getFullYear();
                const monthDiff = today.getMonth() - birthDate.getMonth();
                if (
                  monthDiff < 0 ||
                  (monthDiff === 0 && today.getDate() < birthDate.getDate())
                ) {
                  age--;
                }
                return age >= 18 || "Вам должно быть 18 лет или больше";
              },
            })}
            error={!!errors.age}
            helperText={errors.age?.message}
          />

          <FormControl component="fieldset" error={!!errors.gender} fullWidth>
            <FormLabel component="legend">Пол</FormLabel>
            <RadioGroup>
              <FormControlLabel
                value="male"
                control={
                  <Radio
                    {...register("gender", { required: "Выберите пол" })}
                  />
                }
                label="Male"
              />
              <FormControlLabel
                value="female"
                control={
                  <Radio
                    {...register("gender", { required: "Выберите пол" })}
                  />
                }
                label="Female"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          <TextField
            label="Номер телефона"
            type="number"
            variant="outlined"
            fullWidth
            {...register("phoneNumber", {
              required: "Обязательное поле",
            })}
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
          />

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Зарегистрироваться
          </Button>
        </Stack>
      </form>
    </Box>
  );
}

export default RegistrationForm;
