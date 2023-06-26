import styled from "styled-components";

export const Login = styled.form`
  overflow: hidden;
  position: fixed;
  top: 126px;
  right: 50px;

  width: 333px;
  height: 293px;

  background: rgba(199, 213, 224, 0.05);
  backdrop-filter: blur(35px);
  border-radius: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 17px;

  z-index: 3;

  box-sizing: border-box;

  input {
    width: 80%;
    height: 56px;

    border: none;
    border-top: 1px solid #ffffff90;
    background: #ffffff80;

    border-radius: 12px;
    padding-left: 24px;

    font-size: 18px;
    font-weight: 500;
    color: white;

    ::placeholder {
      color: #2a475e;
      font-weight: 400;
    }

    :focus {
      outline: none;
    }
  }
  button {
    width: 50%;
    height: 47px;

    color: #ffffff;
    font-size: 20px;
    cursor: pointer;
    font-weight: 700;

    border: none;
    background: #66c0f4;
    border-top: 1px solid #ffffff90;

    border-radius: 12px;
    transition: 0.3s;

    :hover {
      background-color: #4192c0;
    }
  }
  p {
    cursor: pointer;
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    text-align: center;

    color: #f1f1f1;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const SignUp = styled(Login)`
  height: 350px;
`;
