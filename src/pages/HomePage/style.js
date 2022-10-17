import styled, { keyframes } from "styled-components";

const trackProgress = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
  `;

export const HomePageStyled = styled.div`
  display: flex;
  flex-direction: column;

  nav {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--gray-4);
    height: 73px;
    width: 100vw;
    border-bottom: 1px solid var(--gray-3);

    img {
      width: 105px;
      height: 14px;
      margin-left: 4.0625%;
    }

    button {
      margin-right: 4.0625%;
    }
  }

  header {
    display: flex;
    flex-direction: column;
    margin-top: 108px;
    gap: 10px;
    height: 130px;
    border-bottom: 1px solid var(--gray-3);
    padding: 0 4.0625%;

    h1 {
      margin-top: 15px;
      font-weight: 700;
      font-size: 18px;
      line-height: 28px;
    }

    span {
      font-weight: 400;
      font-size: 12px;
      line-height: 22px;
    }
  }

  main {
    display: flex;
    flex-direction: column;
    margin-top: 26px;
    padding: 0 4.0625%;

    .addTech {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h3 {
        font-weight: 600;
        font-size: 16px;
        line-height: 18px;
      }

      .plus {
        cursor: pointer;
        border-radius: 4px;
        padding: 0 8px;
        font-size: 24px;
        width: 32px;
        height: 32px;
        color: var(--gray-0);
        background-color: var(--gray-3);

        &:hover {
          background-color: var(--gray-2);
        }
      }
    }

    .outTech {
      align-self: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 300px;
      margin-bottom: 20px;
      animation: ${trackProgress} 1s linear;

      img {
        height: 230px;
        width: 230px;
      }
    }
  }

  @media (min-width: 768px) {
    nav {
      img {
        margin-left: 10%;
      }

      button {
        margin-right: 10%;
      }
    }

    header,
    main {
      padding: 0 10%;
    }
  }

  @media (min-width: 1024px) {
    nav {
      margin-bottom: 45px;

      img {
        margin-left: 16%;
      }

      button {
        margin-right: 16%;
      }
    }

    header {
      flex-direction: row;
      justify-content: space-between;
      padding: 0 16%;

      h1 {
        margin-top: 25px;
      }

      span {
        margin-top: 25px;
      }
    }

    main {
      margin-top: 38px;
      padding: 0 16%;

      .outTech {
        align-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 500px;

        img {
          height: 400px;
          width: 400px;
        }

        p {
          font-size: 20px;
        }
      }
    }
  }

  @media (min-width: 1440px) {
    nav {
      img {
        margin-left: 336px;
      }

      button {
        margin-right: 336px;
      }
    }

    header {
      padding: 0 336px;
    }

    main {
      padding: 0 336px;
    }
  }
`;
