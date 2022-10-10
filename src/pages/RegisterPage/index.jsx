import ButtonNav from "../../components/ButtonNav";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import logo from "../../img/Logo.png";
import { RegisterPageStyled } from "./style";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";
import api from "../../services/api";
import { toast } from "react-toastify";

const schema = yup.object({
  name: yup.string().required("⚠ Nome Obrigatório!"),
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
  confirmPass: yup
    .string()
    .oneOf([yup.ref("password")], "⚠ A confirmação deve ser igual a senha!"),
  bio: yup.string().required("⚠ Bio obrigatória!"),
  contact: yup.string().required("⚠ Contato obrigatório!"),
  course_module: yup.string().required("⚠ Módulo Obrigatório!"),
});

const RegisterPage = () => {
  const navigate = useNavigate();
  const [viewPassword, setViewPassword] = useState("password");
  const [viewPasswordConf, setViewPasswordConf] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function registerUser(data) {
    api
      .post("/users", data)
      .then((response) => {
        console.log(response.data);
        toast.success("Usuário criado com sucesso!");
        navigate("/");
      })
      .catch((err) =>
        err.response.data.message == "Email already exists"
          ? toast.error("Email já cadastrado!")
          : toast.error("Erro ao cadastrar!")
      );
  }

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
