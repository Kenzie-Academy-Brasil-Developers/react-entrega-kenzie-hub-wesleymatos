import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";
import TechProvider from "./contexts/TechContext";

const App = () => {
  return (
    <>
      <ToastContainer theme="dark" />
      <UserProvider>
        <TechProvider>
          <Routes />
        </TechProvider>
      </UserProvider>
    </>
  );
};

export default App;
