import ButtonNav from "../../components/ButtonNav";
import { AiOutlineEye } from "react-icons/ai";
import logo from "../../img/Logo.png";
import { RegisterPageStyled } from "./style";

const RegisterPage = () => {
  function comeBack() {
    console.log("voltou");
  }

  return (
    <RegisterPageStyled>
      <nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <ButtonNav
          content="Voltar"
          onClick={() => {
            comeBack();
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
        <input type="password" id="password" placeholder="********" />
        <span className="icon">
          <AiOutlineEye />
        </span>
        <label htmlFor="confirmPass">Confirme sua senha</label>
        <input type="password" id="confirmPass" placeholder="********" />
        <span className="iconConfirm">
          <AiOutlineEye />
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
