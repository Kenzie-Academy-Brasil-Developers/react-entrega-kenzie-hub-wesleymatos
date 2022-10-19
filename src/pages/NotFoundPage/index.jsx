import { Link } from "react-router-dom";
import notfound from "../../img/notfound.png";
import { StyledNotFound } from "./style";

const NotFoundPage = () => {
  return (
    <StyledNotFound>
      <h1> Esta Página não está disponível. </h1>
      <p>
        O link que você seguiu pode estar quebrado ou a página pode ter sido
        removida.
      </p>
      <img src={notfound} alt="Página não encontrada" />

      <Link to={"/"}>Home</Link>
    </StyledNotFound>
  );
};

export default NotFoundPage;
