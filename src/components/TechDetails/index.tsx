import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useUserContext } from "../../contexts/UserContext";
import { TechDetailsStyled } from "./style";
import { schema } from "../../validations/modalDetails";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

interface ITech {
  status: string;
}

const TechDetails = () => {
  const { setTechDetails } = useUserContext();
  const { deleteTech, nameTech, updateTech } = useContext(TechContext);

  const { register, handleSubmit } = useForm<ITech>({
    resolver: yupResolver(schema),
  });

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
        <form onSubmit={handleSubmit(updateTech)}>
          <label htmlFor="techName">Tecnologia</label>
          <input id="techName" disabled value={nameTech} />

          <label htmlFor="techStatus">Selecione o Status atual</label>
          <select id="techStatus" {...register("status")}>
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
