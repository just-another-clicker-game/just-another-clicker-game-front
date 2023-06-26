import styled from "styled-components";

const GameCss = styled.div`
  display: flex;
  justify-content: space-around;
`;

const PowerUp = styled.div`
    width: 200px;
    height: 115px;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
    align-items: center;
    
    border-radius: 15px;

    background: linear-gradient(to bottom, #303842, transparent);

    color: white;

`

const FloatingOne = styled.div`
  position: fixed;
  top: ${({ y }) => y - 40}px;
  left: ${({ x }) => x}px;
  z-index: 2;
  color: green;
  font-size: 24px;
  opacity: 1;
  animation: floatAnimation 1s ease-in-out;

  @keyframes floatAnimation {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(-100px);
    }
  }
`;

const MainButton = styled.div`
  font-family: "Rubik", sans-serif;
  display: flex;
  flex-direction: column;
  -ms-flex-align: center;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

  .points {
    color: white;
    font-size: 30px;
    margin-bottom: 110%;
  }

  .button {
    padding: 16px 42px;
    box-shadow: 0px 0px 12px -2px rgba(0, 0, 0, 0.5);
    line-height: 1.25;
    background: #fc6e51;
    text-decoration: none;
    color: white;
    font-size: 16px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    position: relative;
    transition: background-color 0.6s ease;
    overflow: hidden;

    &:after {
      content: "";
      position: absolute;
      width: 0;
      height: 0;
      top: 50%;
      left: 50%;
      top: var(--mouse-y);
      left: var(--mouse-x);
      transform-style: flat;
      transform: translate3d(-50%, -50%, 0);
      background: rgba(255, 255, 255, 0.1);
      border-radius: 100%;
      transition: width 0.3s ease, height 0.3s ease;
    }

    &:focus,
    &:hover {
      background: #d15235;
    }

    &:active {
      animation: wiggleAnimation 0.1s infinite;
    }
  }

  @keyframes wiggleAnimation {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(-5deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(10deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

const MainGameCss = {
  GameCss,
  MainButton,
  FloatingOne,
  PowerUp
};

export default MainGameCss;
