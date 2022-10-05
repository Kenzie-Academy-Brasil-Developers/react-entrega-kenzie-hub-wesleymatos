import { ButtonNavStyled } from "./style";

const ButtonNav = ({ content, onClick }) => (
  <ButtonNavStyled type="button" onClick={onClick}>
    {content}
  </ButtonNavStyled>
);

export default ButtonNav;
