import styled from "styled-components";

export const LoginPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  min-height: 100vh;

  .error {
    text-align: center;
    align-self: baseline;
    color: var(--color-primary);
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
  }

  img {
    width: 101px;
    height: 14px;
    margin-bottom: 20px;
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 296px;
    min-height: 405px;
    padding: 0 17px;
    background-color: var(--gray-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

    h1 {
      margin: 34px 0 23px 0;
      font-weight: 700;
      font-size: 14.439px;
      line-height: 22px;
    }

    label {
      align-self: flex-start;
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;
      margin-top: 10px;
      margin-bottom: 18px;
    }

    input {
      color: var(--gray-0);
      background-color: var(--gray-2);
      border: 0.9772px solid var(--gray-1);
      border-radius: 3.20867px;
      width: 264.66px;
      height: 38.5px;
      padding: 0 33px 0 13px;
      font-weight: 400;
      font-size: 13.0293px;
      line-height: 21px;
    }

    .divIcon {
      position: relative;
      width: 264.66px;
      height: 38.5px;
    }

    span {
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 15px;
      width: 11px;
      height: 17px;
    }

    button {
      width: 259.9px;
      height: 38.5px;
      background-color: var(--color-primary);
      color: var(--gray-0);
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      margin-top: 18px;
      margin-bottom: 28px;
      font-weight: 500;
      font-size: 12.8347px;
      line-height: 21px;

      &:hover {
        background-color: var(--color-primary-focus);
        border-color: var(--color-primary-focus);
      }

      &:focus {
        background-color: var(--color-primary-negative);
        border-color: var(--color-primary-negative);
      }
    }

    p {
      font-weight: 600;
      font-size: 9.62602px;
      line-height: 14px;
      color: var(--gray-1);
      margin-bottom: 18px;
    }

    .divButton {
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: "Inter", sans-serif;
      cursor: pointer;
      width: 259.9px;
      height: 38.5px;
      background-color: var(--gray-1);
      border: 1.2182px solid var(--gray-1);
      border-radius: 4px;
      margin-bottom: 10px;

      &:hover {
        border-color: var(--gray-2);
        background-color: var(--gray-2);
      }

      a {
        color: var(--gray-0);
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        text-decoration: none;
      }
    }
  }

  @media (min-width: 1024px) {
    img {
      width: 144px;
      height: 20px;
      margin-bottom: 35px;
    }

    form {
      width: 369px;
      min-height: 502px;

      h1 {
        margin: 42px 0 28px 0;
        font-size: 18px;
        line-height: 28px;
      }

      label {
        margin-bottom: 22px;
        font-size: 12.182px;
      }

      input {
        width: 329.93px;
        height: 48px;
        padding: 0 36px 0 16px;
        font-size: 16.2426px;
        line-height: 26px;
      }

      .divIcon {
        width: 329.93px;
        height: 48px;
      }

      span {
        width: 14px;
        height: 22px;
        top: 15px;
        right: 18px;
      }

      button {
        width: 324px;
        height: 48px;
        margin-bottom: 34px;
        font-size: 16px;
        line-height: 26px;
      }

      p {
        font-size: 12px;
        line-height: 18px;
        margin-bottom: 22px;
      }

      .divButton {
        width: 324px;
        height: 48px;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;
