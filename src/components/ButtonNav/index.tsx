import { ReactNode } from "react";
import { ButtonNavStyled } from "./style";

interface IButtonNavProps {
  content: ReactNode;
  onClick: () => void;
}

const ButtonNav = ({ content, onClick }: IButtonNavProps) => (
  <ButtonNavStyled type="button" onClick={onClick}>
    {content}
  </ButtonNavStyled>
);

export default ButtonNav;
