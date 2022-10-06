import ButtonNav from "../../components/ButtonNav";
import logo from "../../img/Logo.png";
import { HomePageStyled } from "./style";

const HomePage = () => {
  function logout() {
    console.log("saiu");
  }

  return (
    <HomePageStyled>
      <nav>
        <img src={logo} alt="Logo Kenzie Hub" />
        <ButtonNav
          content="Sair"
          onClick={() => {
            logout();
          }}
        />
      </nav>
      <header>
        <h1>Olá, Samuel Leão!</h1>
        <span>Primeiro módulo (Introdução ao Frontend)</span>
      </header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
