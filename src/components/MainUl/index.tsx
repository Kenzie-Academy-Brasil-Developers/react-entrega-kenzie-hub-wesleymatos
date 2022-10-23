import { useTechContext } from "../../contexts/TechContext";
import { useUserContext } from "../../contexts/UserContext";
import { StyledMainUl } from "./style";

const MainUl = () => {
  const { setTechDetails, user } = useUserContext();
  const { setIdLi, setNameTech } = useTechContext();

  return (
    <StyledMainUl>
      {user?.techs?.map((technologies) => (
        <li
          id={technologies.id}
          key={technologies.id}
          onClick={() => {
            setTechDetails(true);
            setNameTech(technologies.title);
            setIdLi(technologies.id);
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
