import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledMainUl } from "./style";

const MainUl = () => {
  const { setTechDetails } = useContext(UserContext);

  return (
    <StyledMainUl>
      <li
        onClick={() => {
          setTechDetails(true);
        }}
      >
        <p>TypeScript</p>
        <span>Iniciante</span>
      </li>
    </StyledMainUl>
  );
};

export default MainUl;
