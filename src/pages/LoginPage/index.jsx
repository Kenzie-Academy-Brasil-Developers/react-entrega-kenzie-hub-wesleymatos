import logo from "../../img/Logo.png";

import { AiOutlineEye } from "react-icons/ai";
import { LoginPageStyled } from "./style";

const LoginPage = () => {
  return (
    <LoginPageStyled>
      <img src={logo} alt="Logo Kenzie Hub" />
      <form action="">
        <h1>Login</h1>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="example@mail.com" />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" placeholder="********" />
        <span className="eyeOpen">
          <AiOutlineEye />
        </span>
        <button type="submit">Entrar</button>
        <p>Ainda não possui uma conta?</p>
        <div>Cadastre-se</div>
      </form>
    </LoginPageStyled>
  );
};

export default LoginPage;
