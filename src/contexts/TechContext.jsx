import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import api from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [idLi, setIdLi] = useState("");
  const [nameTech, setNameTech] = useState("");

  const { setCreateTech, setTechDetails, changeLi, setChangeLi } =
    useContext(UserContext);

  async function addTech(data) {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!");
      setCreateTech(false);
      setChangeLi(!changeLi);
    } catch (error) {
      if (
        error.response.data.message ==
        "User Already have this technology created you can only update it"
      ) {
        toast.error("Esta tecnologia já foi criada, você só pode atualizá-la.");
      } else {
        toast.error("Erro no cadastro da tecnologia!");
      }
    }
  }

  async function deleteTech() {
    try {
      await api.delete(`/users/techs/${idLi}`);
      toast.success("Tecnologia deletada com sucesso!");
      setTechDetails(false);
      setChangeLi(!changeLi);
    } catch {
      toast.error("Erro ao deletar tecnologia!");
    }
  }

  async function updateTech(data) {
    console.log(data);

    try {
      await api.put(`/users/techs/${idLi}`, data);
      toast.success("Tecnologia editada com sucesso!");
      setTechDetails(false);
      setChangeLi(!changeLi);
    } catch {
      toast.error("Erro ao editar a tecnologia!");
    }
  }

  return (
    <TechContext.Provider
      value={{
        idLi,
        setIdLi,
        deleteTech,
        addTech,
        nameTech,
        setNameTech,
        updateTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
