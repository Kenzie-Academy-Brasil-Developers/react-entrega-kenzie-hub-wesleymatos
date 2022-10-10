import ButtonNav from "../../components/ButtonNav";
import logo from "../../img/Logo.png";
import { HomePageStyled } from "./style";
import { useNavigate } from "react-router-dom";

const HomePage = ({ user }) => {
  const navigate = useNavigate();

  function logout() {
    localStorage.clear();
    navigate("/");
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
        <h1>{`Olá, ${user.name}!`}</h1>
        <span>{user.course_module}</span>
      </header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento :(</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades...
        </p>
      </main>
    </HomePageStyled>
  );
};

export default HomePage;
