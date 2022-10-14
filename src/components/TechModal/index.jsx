import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechModalStyled } from "./style";

const TechModal = () => {
  const { setCreateTech } = useContext(UserContext);

  return (
    <TechModalStyled>
      <div className="container">
        <div>
          <h3>Cadastrar Tecnologia</h3>
          <span
            onClick={() => {
              setCreateTech(false);
            }}
          >
            X
          </span>
        </div>
        <form>
          <label htmlFor="techName">Tecnologia</label>
          <input id="techName" placeholder="TypeScript" />

          <label htmlFor="techStatus">Selecionar Status</label>
          <select id="techStatus">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </TechModalStyled>
  );
};

export default TechModal;
