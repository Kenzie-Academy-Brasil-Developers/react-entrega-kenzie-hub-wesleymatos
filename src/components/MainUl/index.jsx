import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledMainUl } from "./style";

const MainUl = () => {
  const { setTechDetails, user } = useContext(UserContext);
  const { setIdLi } = useContext(TechContext);

  return (
    <StyledMainUl>
      {user.techs?.map((technologies) => (
        <li
          id={technologies.id}
          key={technologies.id}
          onClick={(e) => {
            setTechDetails(true);
            setIdLi(e.target.id);
          }}
        >
          <p>{technologies.title}</p>
          <span>{technologies.status}</span>
        </li>
      ))}
    </StyledMainUl>
  );
};

export default MainUl;
