import styled, { keyframes } from "styled-components";

const ring = keyframes`
  0% {
    transform: rotate(0deg);
    box-shadow: 1px 5px 2px var(--color-primary);
  }

  50%{
    transform: rotate(180deg);
    box-shadow: 1px 5px 2px var(--color-primary-focus);
  }

  100% {
    transform: rotate(360deg);
    box-shadow: 1px 5px 2px var(--color-primary-negative);
  }
  `;

const text = keyframes`
  50%{
    color: var(--background);
  }
`;

export const LoadingStyled = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;

  .ring {
    position: absolute;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    animation: ${ring} 2s linear infinite;

    &::before {
      position: absolute;
      content: "";
      left: 0;
      top: 0;
      height: 100%;
      width: 100%;
      border-radius: 50%;
      box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    }
  }

  span {
    color: var(--gray-1);
    font-size: 20px;
    letter-spacing: 1px;
    animation: ${text} 3s ease-in-out infinite;
  }
`;
