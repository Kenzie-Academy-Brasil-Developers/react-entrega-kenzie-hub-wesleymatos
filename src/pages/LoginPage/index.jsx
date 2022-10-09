import logo from "../../img/Logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginPageStyled } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  email: yup
    .string()
    .email("⚠ Email inválido!")
    .required("⚠ Email obrigatório!"),
  password: yup
    .string()
    .required("⚠ Senha obrigatória!")
    .min(8, "⚠ Sua senha deve conter ao menos 8 caracteres!")
    .matches(
      "^(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-zA-z])",
      "⚠ Sua senha deve conter ao menos, uma letra, um símbolo e um número!"
    ),
});

const LoginPage = () => {
  const [viewPassword, setViewPassword] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function loginUser(data) {
    console.log(data);
  }

  return (
    <LoginPageStyled>
      <img src={logo} alt="Logo Kenzie Hub" />
      <form onSubmit={handleSubmit(loginUser)}>
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          placeholder="example@mail.com"
          {...register("email")}
        />
        <p className="error">{errors.email?.message}</p>
        <label htmlFor="password">Senha</label>
        <div className="divIcon">
          <input
            type={viewPassword}
            id="password"
            placeholder="********"
            {...register("password")}
          />
          <span
            onClick={() => {
              viewPassword == "password"
                ? setViewPassword("text")
                : setViewPassword("password");
            }}
          >
            {viewPassword == "password" ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </span>
        </div>
        <p className="error">{errors.password?.message}</p>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <div className="divButton">Cadastre-se</div>
      </form>
    </LoginPageStyled>
  );
};

export default LoginPage;
