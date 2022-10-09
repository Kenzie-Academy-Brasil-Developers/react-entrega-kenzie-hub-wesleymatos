import styled from "styled-components";

export const RegisterPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  min-height: 100vh;

  nav {
    display: flex;
    justify-content: space-between;
    width: 296px;
    margin-bottom: 30px;
    margin-top: 5px;

    img {
      align-self: center;
      width: 97.59px;
      height: 16.9px;
    }
  }

  form {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 296px;
    padding: 0 17px;
    background-color: var(--gray-3);
    box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
    border-radius: 3.20867px;

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

    h1 {
      margin: 18px 0;
      font-weight: 700;
      font-size: 14.439px;
      line-height: 22px;
    }

    span {
      margin-bottom: 18px;
      font-weight: 400;
      font-size: 9.59437px;
      line-height: 18px;
    }

    label {
      align-self: flex-start;
      font-weight: 400;
      font-size: 9.772px;
      line-height: 0px;
      margin-bottom: 18px;
      margin-top: 5px;
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

    .icon,
    .iconConfirm {
      position: absolute;
      cursor: pointer;
      top: 10px;
      right: 15px;
      width: 11px;
      height: 17px;
    }

    select {
      background-color: var(--gray-2);
      color: var(--gray-1);
      border: 0.9772px solid var(--gray-1);
      border-radius: 3.20867px;
      width: 264.66px;
      height: 38.5px;
      padding: 0 13px;
      font-weight: 400;
      font-size: 13.0293px;
      line-height: 21px;
      margin-bottom: 16px;
      cursor: pointer;
    }

    button {
      width: 259.9px;
      height: 38.5px;
      background-color: var(--color-primary);
      color: var(--gray-0);
      border: 1.2182px solid var(--color-primary);
      border-radius: 4.06066px;
      margin-bottom: 10px;
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
  }
  @media (min-width: 1024px) {
    nav {
      width: 369px;
      margin-bottom: 40px;

      img {
        width: 122.06px;
        height: 21.21px;
      }
    }

    form {
      width: 369px;
      margin-bottom: 10px;

      .divIcon {
        width: 329.93px;
        height: 48px;
      }

      h1 {
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

      select {
        width: 329.93px;
        height: 48px;
        padding: 0 16px;
        font-size: 16.2426px;
        line-height: 26px;
        margin-bottom: 22px;
      }

      span {
        font-size: 12px;
        line-height: 22px;
      }

      .icon,
      .iconConfirm {
        top: 15px;
        right: 18px;
      }

      select {
        margin-bottom: 20px;
      }

      button {
        width: 324px;
        height: 48px;
        margin-bottom: 10px;
        font-size: 16px;
        line-height: 26px;
      }
    }
  }
`;
