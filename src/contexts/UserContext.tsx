import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AxiosError } from "axios";

const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserProviderProps {
  children: ReactNode;
}

export interface IApiError {
  message: string;
}

interface ILoginUser {
  email: string;
  password: string;
}

interface IRegisterUser {
  email: string;
  password: string;
  name: string;
  bio: string;
  contact: string;
  course_module: string;
}

interface IUser {
  avatar_url: null | string;
  bio: string;
  contact: string;
  course_module: string;
  created_at: string;
  email: string;
  id: string;
  name: string;
  techs: [] | ITechs[];
  updated_at: string;
  works: [];
}

interface ITechs {
  created_at: string;
  id: string;
  status: string;
  title: string;
  updated_at: string;
}

interface IResponseDataLogin {
  user: IUser;
  token: string;
}

interface IResponseLogin {
  data: IResponseDataLogin;
}

interface IUserContext {
  loginUser: (data: ILoginUser) => Promise<void>;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  user: IUser | null;
  loading: boolean;
  registerUser: (data: IRegisterUser) => Promise<void>;
  createTech: boolean;
  setCreateTech: React.Dispatch<React.SetStateAction<boolean>>;
  techDetails: boolean;
  setTechDetails: React.Dispatch<React.SetStateAction<boolean>>;
  changeLi: boolean;
  setChangeLi: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserProvider = ({ children }: IUserProviderProps) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<IUser | null>(null);
  const [createTech, setCreateTech] = useState(false);
  const [techDetails, setTechDetails] = useState(false);
  const [changeLi, setChangeLi] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          api.defaults.headers.common.authorization = `Bearer ${token}`;

          const { data } = await api.get<IUser>("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
      }

      setLoading(false);
    }

    loadUser();
  }, [changeLi]);

  async function loginUser(data: ILoginUser) {
    try {
      const response: IResponseLogin = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.common.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@kenzie-hub:token", token);
      toast.success("Usuário logado com sucesso!");
      navigate("/home", { replace: true });
    } catch {
      toast.error("Erro no login!");
    }
  }

  async function registerUser(data: IRegisterUser) {
    try {
      await api.post("/users", data);

      toast.success("Usuário criado com sucesso!");
      navigate("/");
    } catch (error) {
      const requestError = error as AxiosError<IApiError>;
      requestError.response?.data.message === "Email already exists"
        ? toast.error("Email já cadastrado!")
        : toast.error("Erro ao cadastrar!");
    }
  }

  return (
    <UserContext.Provider
      value={{
        loginUser,
        setUser,
        user,
        loading,
        registerUser,
        createTech,
        setCreateTech,
        techDetails,
        setTechDetails,
        changeLi,
        setChangeLi,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export function useUserContext(): IUserContext {
  const context = useContext(UserContext);

  return context;
}
