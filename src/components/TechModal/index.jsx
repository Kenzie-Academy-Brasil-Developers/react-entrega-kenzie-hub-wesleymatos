import { TechModalStyled } from "./style";

const TechModal = () => {
  return (
    <TechModalStyled>
      <div>
        <h3>Cadastrar Tecnologia</h3>
        <span>X</span>
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
    </TechModalStyled>
  );
};

export default TechModal;
