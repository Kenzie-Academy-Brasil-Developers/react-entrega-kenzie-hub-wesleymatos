import ButtonNav from "../../components/ButtonNav";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../img/Logo.png";
import { RegisterPageStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState("password");
  const [viewPasswordConf, setViewPasswordConf] = useState("password");

  return (
    <RegisterPageStyled>
      <nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <ButtonNav
          content="Voltar"
          onClick={() => {
            navigate("/");
          }}
        />
      </nav>
      <form>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>

        <label htmlFor="name">Nome</label>
        <input type="text" id="name" placeholder="Digite seu nome" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="example@mail.com" />

        <label htmlFor="password">Senha</label>
        <input type={viewPassword} id="password" placeholder="********" />
        <span
          className="icon"
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

        <label htmlFor="confirmPass">Confirme sua senha</label>
        <input
          type={viewPasswordConf}
          id="confirmPass"
          placeholder="********"
        />
        <span
          className="iconConfirm"
          onClick={() => {
            viewPasswordConf == "password"
              ? setViewPasswordConf("text")
              : setViewPasswordConf("password");
          }}
        >
          {viewPasswordConf == "password" ? (
            <AiOutlineEye />
          ) : (
            <AiOutlineEyeInvisible />
          )}
        </span>

        <label htmlFor="bio">Bio</label>
        <input type="text" id="bio" placeholder="Fale sobre você" />

        <label htmlFor="contact">Contato</label>
        <input
          type="text"
          id="contact"
          placeholder="Insira algum meio de contato"
        />

        <label htmlFor="module">Selecionar Módulo</label>
        <select>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
        </select>

        <button type="submit">Cadastrar</button>
      </form>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
