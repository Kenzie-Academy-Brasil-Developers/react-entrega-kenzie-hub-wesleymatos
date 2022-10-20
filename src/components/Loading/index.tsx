import { LoadingStyled } from "./style";

const Loading = () => {
  return (
    <LoadingStyled>
      <div className="ring"></div>
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
