import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { useUserContext } from "../../contexts/UserContext";
import { StyledMainUl } from "./style";

const MainUl = () => {
  const { setTechDetails, user } = useUserContext();
  const { setIdLi, setNameTech } = useContext(TechContext);

  return (
    <StyledMainUl>
      {user.techs?.map((technologies) => (
        <li
          id={technologies.id}
          key={technologies.id}
          onClick={(e) => {
            setTechDetails(true);
            setNameTech(e.target.children[0].id);
            setIdLi(e.target.id);
          }}
        >
          <p id={technologies.title}>{technologies.title}</p>
          <span>{technologies.status}</span>
        </li>
      ))}
    </StyledMainUl>
  );
};

export default MainUl;
