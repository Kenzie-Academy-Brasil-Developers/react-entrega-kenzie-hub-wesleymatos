import { createContext, useEffect, useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function loadUser() {
      const token = localStorage.getItem("@kenzie-hub:token");

      if (token) {
        try {
          api.defaults.headers.authorization = `Bearer ${token}`;

          const { data } = await api.get("/profile");
          setUser(data);
        } catch (error) {
          console.error(error);
          localStorage.clear();
        }
      }

      setLoading(false);
    }

    loadUser();
  }, []);

  async function loginUser(data) {
    console.log(data);
    try {
      const response = await api.post("/sessions", data);

      const { user: userResponse, token } = response.data;

      api.defaults.headers.authorization = `Bearer ${token}`;

      setUser(userResponse);
      localStorage.setItem("@kenzie-hub:token", token);
      toast.success("Usuário logado com sucesso!");
      navigate("/home", { replace: true });
    } catch (error) {
      console.error(error);
      toast.error("Erro no login!");
    }
  }

  return (
    <UserContext.Provider value={{ loginUser, setUser, user, loading }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
