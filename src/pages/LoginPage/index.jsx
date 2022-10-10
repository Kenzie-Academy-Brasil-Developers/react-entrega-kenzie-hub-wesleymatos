import logo from "../../img/Logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginPageStyled } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { toast } from "react-toastify";

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

const LoginPage = ({ setUser }) => {
  const [viewPassword, setViewPassword] = useState("password");
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function loginUser(data) {
    console.log(data);
    api
      .post("/sessions", data)
      .then((response) => {
        setUser(response.data.user);
        localStorage.setItem("KenzieHub@TOKEN", response.data.token);
        localStorage.setItem("KenzieHub@USERID", response.data.user.id);
        toast.success("Usuário logado com sucesso!");
        navigate("/home");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Erro no login!");
      });
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
        <div
          className="divButton"
          onClick={() => {
            navigate("/register");
          }}
        >
          Cadastre-se
        </div>
      </form>
    </LoginPageStyled>
  );
};

export default LoginPage;
