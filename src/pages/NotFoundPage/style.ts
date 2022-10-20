import styled from "styled-components";

export const StyledNotFound = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  h1 {
    font-size: 20px;
    color: var(--color-primary);
    margin-bottom: 10px;
  }

  img {
    height: 300px;
    width: 300px;
  }

  a {
    padding: 5px 0;
    text-decoration: none;
    font-weight: 600;
    height: 29px;
    width: 80px;
    color: var(--gray-0);
    background-color: var(--gray-3);
    border-radius: 4px;
  }

  @media (min-width: 1024px) {
    img {
      height: 500px;
      width: 500px;
    }
  }
`;
