import { TechDetailsStyled } from "./style";

const TechDetails = () => {
  return (
    <TechDetailsStyled>
      <div>
        <h3>Tecnologia Detalhes</h3>
        <span>X</span>
      </div>
      <form>
        <label htmlFor="techName">Nome do Projeto</label>
        <input id="techName" placeholder="TypeScript" />

        <label htmlFor="techStatus">Selecionar Status</label>
        <select id="techStatus">
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <div className="btnsModal">
          <button type="submit">Salvar alterações</button>
          <button className="delete" type="button">
            Excluir
          </button>
        </div>
      </form>
    </TechDetailsStyled>
  );
};

export default TechDetails;
