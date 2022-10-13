import ButtonNav from "../../components/ButtonNav";
import logo from "../../img/Logo.png";
import { HomePageStyled } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import MainUl from "../../components/MainUl";

const HomePage = () => {
  const { user, setUser, loading } = useContext(UserContext);
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  if (loading) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      {user ? (
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
            <div className="addTech">
              <h3>Tecnologias</h3>
              <span className="plus">+</span>
            </div>

            <MainUl />
          </main>
        </HomePageStyled>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default HomePage;
