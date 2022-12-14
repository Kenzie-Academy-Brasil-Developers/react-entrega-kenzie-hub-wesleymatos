import ButtonNav from "../../components/ButtonNav";
import logo from "../../img/Logo.png";
import vetor from "../../img/Vetor.png";
import { HomePageStyled } from "./style";
import { Navigate, useNavigate } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";
import MainUl from "../../components/MainUl";
import TechDetails from "../../components/TechDetails";
import TechModal from "../../components/TechModal";
import Loading from "../../components/Loading";

const HomePage = () => {
  const { user, setUser, loading, createTech, setCreateTech, techDetails } =
    useUserContext();
  const navigate = useNavigate();

  function logout() {
    setUser(null);
    localStorage.clear();
    navigate("/");
  }

  if (loading) {
    return <Loading />;
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
              <span
                className="plus"
                onClick={() => {
                  setCreateTech(true);
                }}
              >
                +
              </span>
            </div>
            {user.techs.length ? (
              <MainUl />
            ) : (
              <div className="outTech">
                <img src={vetor} alt="Computador" />
                <p>Nenhuma tecnologia foi encontrada... :(</p>
              </div>
            )}
          </main>
          {createTech && <TechModal />}
          {techDetails && <TechDetails />}
        </HomePageStyled>
      ) : (
        <Navigate to="/" replace />
      )}
    </>
  );
};

export default HomePage;
