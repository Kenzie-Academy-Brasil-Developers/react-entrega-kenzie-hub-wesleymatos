import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { TechModalStyled } from "./style";
import { schema } from "../../validations/modalTech";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";
import { toast } from "react-toastify";

const TechModal = () => {
  const { setCreateTech } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function addTech(data) {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!");
      setCreateTech(false);
    } catch (error) {
      console.error(error);
      toast.error("Erro no registro!");
    }
  }

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
        <form onSubmit={handleSubmit(addTech)}>
          <label htmlFor="techName">Tecnologia</label>
          <input
            id="techName"
            placeholder="Ex: TypeScript"
            {...register("title")}
          />
          {errors.title && <p className="error">{errors.title.message}</p>}

          <label htmlFor="techStatus">Selecionar Status</label>
          <select id="techStatus" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          {errors.status && <p className="error">{errors.status.message}</p>}

          <button type="submit">Cadastrar Tecnologia</button>
        </form>
      </div>
    </TechModalStyled>
  );
};

export default TechModal;
