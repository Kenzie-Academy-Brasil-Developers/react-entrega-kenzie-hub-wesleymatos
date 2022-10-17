import styled, { keyframes } from "styled-components";

const trackProgress = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
  `;

export const TechModalStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  background-color: #12121457;

  .container {
    display: flex;
    flex-direction: column;
    width: 296px;
    animation: ${trackProgress} 0.3s ease-in;

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 40px;
      width: 100%;
      background-color: var(--gray-2);
      border-radius: 3.20867px 3.20867px 0px 0px;
      padding: 0 16px;

      h3 {
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
      }

      span {
        font-weight: 700;
        font-size: 11.2304px;
        line-height: 19px;
        color: var(--gray-1);
        cursor: pointer;

        &:hover {
          color: var(--gray-0);
        }
      }
    }

    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      min-height: 235px;
      width: 100%;
      background-color: var(--gray-3);
      box-shadow: 0px 3.20867px 32.0867px -8.02168px rgba(0, 0, 0, 0.25);
      border-radius: 3.20867px;
      gap: 18px;
      padding: 20px 0;

      label {
        align-self: flex-start;
        font-weight: 400;
        font-size: 9.772px;
        line-height: 0px;
        margin-left: 17.65px;
        color: var(--gray-0);
      }

      input {
        color: var(--gray-0);
      }

      select {
        color: var(--gray-1);
      }

      input,
      select {
        padding: 8.43px 13px;
        width: 265px;
        height: 38px;
        background-color: var(--gray-3);
        border: 0.9772px solid var(--gray-1);
        border-radius: 3.20867px;
      }

      .error {
        text-align: center;
        align-self: center;
        color: var(--color-primary);
        margin-bottom: 5px;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
      }

      button {
        width: 260px;
        height: 38px;
        font-weight: 500;
        font-size: 12.8347px;
        line-height: 21px;
        color: var(--gray-0);
        background-color: var(--color-primary);
        border: 1.2182px solid var(--color-primary);
        border-radius: 4.06066px;

        :hover {
          background-color: var(--color-primary-focus);
          border-color: var(--color-primary-focus);
        }

        :focus {
          background-color: var(--color-primary-negative);
          border-color: var(--color-primary-negative);
        }
      }
    }
  }
  @media (min-width: 768px) {
    .container {
      width: 369px;
      min-height: 342px;

      div {
        height: 50px;

        h3 {
          font-size: 14px;
          line-height: 24px;
        }

        span {
          font-size: 16px;
          line-height: 26px;
        }
      }

      form {
        label {
          font-size: 12.182px;
        }

        input,
        select {
          width: 329.93px;
          height: 48px;
          font-size: 16.2426px;
          line-height: 26px;
          border-radius: 4px;
        }

        button {
          width: 324px;
          height: 48px;
          font-size: 16px;
          line-height: 26px;
        }
      }
    }
  }
`;
