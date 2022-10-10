import Routes from "./routes";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

const App = () => {
  const [user, setUser] = useState([]);

  return (
    <>
      <Routes user={user} setUser={setUser} />
      <ToastContainer />
    </>
  );
};

export default App;
