import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserProvider from "./contexts/UserContext";

const App = () => {
  return (
    <>
      <ToastContainer />
      <UserProvider>
        <Routes />
      </UserProvider>
    </>
  );
};

export default App;
