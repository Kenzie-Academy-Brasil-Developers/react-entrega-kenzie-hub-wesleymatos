import styled, { keyframes } from "styled-components";

const entering = keyframes`
  0% {
    color: transparent;
    transform: translateX(-30px);
    filter: opacity(0);
  }
  100% {
    transform: translateX(0px);
    filter: opacity(1);
  }
  `;

export const StyledMainUl = styled.ul`
  display: flex;
  flex-direction: column;
  background-color: var(--gray-3);
  width: 100%;
  min-height: 95px;
  border-radius: 4px;
  padding: 23px 0;
  gap: 15px;
  margin-bottom: 20px;

  li {
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    background-color: var(--gray-4);
    width: calc(100% - 23px);
    height: 48.73px;
    border-radius: 4px;
    padding: 0 12px;
    animation: ${entering} linear 1s;
    transition: 0.3s;

    &:hover {
      background-color: var(--gray-1);
    }

    p {
      color: var(--gray-0);
      font-weight: 700;
      font-size: 14.2123px;
      line-height: 24px;
    }

    span {
      color: var(--gray-0);
      font-weight: 400;
      font-size: 12.182px;
      line-height: 22px;
    }
  }
`;
