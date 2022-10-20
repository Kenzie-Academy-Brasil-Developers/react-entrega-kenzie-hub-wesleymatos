import { ReactNode } from "react";
import { ButtonNavStyled } from "./style";

interface IButtonNav {
  content: ReactNode;
  onClick: () => void;
}

const ButtonNav = ({ content, onClick }: IButtonNav) => (
  <ButtonNavStyled type="button" onClick={onClick}>
    {content}
  </ButtonNavStyled>
);

export default ButtonNav;
