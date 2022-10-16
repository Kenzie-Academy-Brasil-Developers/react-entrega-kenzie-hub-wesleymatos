import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { StyledMainUl } from "./style";

const MainUl = () => {
  const { setTechDetails, user } = useContext(UserContext);

  return (
    <StyledMainUl>
      {user.techs?.map((technologies) => (
        <li
          key={technologies.id}
          onClick={() => {
            setTechDetails(true);
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
