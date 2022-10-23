import { createContext, ReactNode, useContext, useState } from "react";
import { IApiError, useUserContext } from "./UserContext";
import api from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export const TechContext = createContext<ITechContext>({} as ITechContext);

interface ITechProviderProps {
  children: ReactNode;
}

interface IAddTechData {
  title: string;
  status: string;
}

type IUpdateTechData = Omit<IAddTechData, "title">;

interface ITechContext {
  idLi: string;
  setIdLi: React.Dispatch<React.SetStateAction<string>>;
  deleteTech: () => Promise<void>;
  addTech: (data: IAddTechData) => Promise<void>;
  nameTech: string;
  setNameTech: React.Dispatch<React.SetStateAction<string>>;
  updateTech: (data: IUpdateTechData) => Promise<void>;
}

export const TechProvider = ({ children }: ITechProviderProps) => {
  const [idLi, setIdLi] = useState("");
  const [nameTech, setNameTech] = useState("");

  const { setCreateTech, setTechDetails, changeLi, setChangeLi } =
    useUserContext();

  async function addTech(data: IAddTechData) {
    try {
      await api.post("/users/techs", data);
      toast.success("Tecnologia criada com sucesso!");
      setCreateTech(false);
      setChangeLi(!changeLi);
    } catch (error) {
      const requestError = error as AxiosError<IApiError>;

      if (
        requestError.response?.data.message ===
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

  async function updateTech(data: IUpdateTechData) {
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

export function useTechContext(): ITechContext {
  const context = useContext(TechContext);

  return context;
}
