import { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";
import api from "../services/api";
import { toast } from "react-toastify";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const [idLi, setIdLi] = useState("");

  const { setCreateTech } = useContext(UserContext);

  async function addTech(data) {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!");
      setCreateTech(false);
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

  function deleteTech() {
    console.log(`deletando ${idLi}`);
  }

  return (
    <TechContext.Provider value={{ idLi, setIdLi, deleteTech, addTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
