import logo from "../../img/Logo.png";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { LoginPageStyled } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/loginUser";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import api from "../../services/api";

const LoginPage = () => {
  const [viewPassword, setViewPassword] = useState("password");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("@kenzie-hub:token");

    async function isUserLogged() {
      if (token) {
        try {
          await api.get("/profile");
          token && navigate("/home", { replace: true });
        } catch (error) {
          console.error(error);
        }
      }
    }
    isUserLogged();
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { loginUser } = useUserContext();

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
        <div className="divButton">
          <Link to="/register"> Cadastre-se </Link>
        </div>
      </form>
    </LoginPageStyled>
  );
};

export default LoginPage;
