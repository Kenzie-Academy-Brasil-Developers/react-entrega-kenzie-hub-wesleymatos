import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { TechDetailsStyled } from "./style";

const TechDetails = () => {
  const { setTechDetails } = useContext(UserContext);
  const { deleteTech, nameTech } = useContext(TechContext);

  return (
    <TechDetailsStyled>
      <div className="container">
        <div>
          <h3>Tecnologia Detalhes</h3>
          <span
            onClick={() => {
              setTechDetails(false);
            }}
          >
            X
          </span>
        </div>
        <form>
          <label htmlFor="techName">Tecnologia</label>
          <input id="techName" disabled value={nameTech} />

          <label htmlFor="techStatus">Selecionar Status</label>
          <select id="techStatus">
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <div className="btnsModal">
            <button type="submit">Salvar alterações</button>
            <button
              className="delete"
              type="button"
              onClick={() => {
                deleteTech();
              }}
            >
              Excluir
            </button>
          </div>
        </form>
      </div>
    </TechDetailsStyled>
  );
};

export default TechDetails;
