import ButtonNav from "../../components/ButtonNav";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../img/Logo.png";
import { RegisterPageStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "../../validations/registerUser";
import { useContext, useState } from "react";
import { UserContext } from "../../contexts/UserContext";

const RegisterPage = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState("password");
  const [viewPasswordConf, setViewPasswordConf] = useState("password");

  const { registerUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

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
      <form onSubmit={handleSubmit(registerUser)}>
        <h1>Crie sua conta</h1>
        <span>Rapido e grátis, vamos nessa</span>

        <label htmlFor="name">Nome</label>
        <input id="name" placeholder="Digite seu nome" {...register("name")} />
        <p className="error">{errors.name?.message}</p>

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
        </div>
        <p className="error">{errors.password?.message}</p>

        <label htmlFor="confirmPass">Confirme sua senha</label>
        <div className="divIcon">
          <input
            type={viewPasswordConf}
            id="confirmPass"
            placeholder="********"
            {...register("confirmPass")}
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
        </div>
        <p className="error">{errors.confirmPass?.message}</p>

        <label htmlFor="bio">Bio</label>
        <input id="bio" placeholder="Fale sobre você" {...register("bio")} />
        <p className="error">{errors.bio?.message}</p>

        <label htmlFor="contact">Contato</label>
        <input
          id="contact"
          placeholder="Insira algum meio de contato"
          {...register("contact")}
        />
        <p className="error">{errors.contact?.message}</p>

        <label htmlFor="course_module">Selecionar Módulo</label>
        <select id="course_module" {...register("course_module")}>
          <option value="Primeiro Módulo">Primeiro Módulo</option>
          <option value="Segundo Módulo">Segundo Módulo</option>
          <option value="Terceiro Módulo">Terceiro Módulo</option>
          <option value="Quarto Módulo">Quarto Módulo</option>
        </select>
        <p className="error">{errors.course_module?.message}</p>

        <button type="submit">Cadastrar</button>
      </form>
    </RegisterPageStyled>
  );
};

export default RegisterPage;
