import SessionContext from "../../hooks/SessionContext";
import { API_BASE_URL } from "../../services/constants";
import { AuthContext } from "../../provider/provider";
import { useState, useContext, useEffect } from "react";
import ModalSpinner from "../ModalSpinner";
import * as S from "./style";
import axios from "axios";

export default function Login() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const value = useContext(AuthContext);
  const { setSession } = useContext(SessionContext);
  const [errorValue, setErrorValue] = useState(false)

  function login(e) {
    e.preventDefault();
    const dados = {
      email: email,
      password: password,
    };

    setIsLoading(true);

    axios
      .post(`${API_BASE_URL}/sign-in`, dados)
      .then(({ data: { user: { email, name }, token } }) => {
        console.log(name)
        setSession({
          email,
          name,
          config: { headers: { Authorization: `Bearer ${token}` } },
        });
        value.setValue(false);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setErrorValue(true)
        console.log(err.response);

        setTimeout(() => {
          setErrorValue(false);
        }, 3000);
      });
  }

  function signUp(e) {
    e.preventDefault();
    const dados = {
      email: email,
      name: name,
      password: password,
    };
    setIsLoading(true);
    axios
      .post(`${API_BASE_URL}/sign-up`, dados)
      .then((crr) => {
        console.log(crr.data);
        setEmail("")
        setPassword("")
        value.setValue2(false);
        value.setValue(true);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.response);
        setIsLoading(false);
        setErrorValue(true)
        setTimeout(() => {
          setErrorValue(false);
        }, 3000);
      });
  }

  return (
    <>
      {value.value && (
        <S.Login onSubmit={login}>
          {isLoading && <ModalSpinner />}
          {errorValue && <p>Erro no login. Verifique suas credenciais.</p>}

          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Entrar</button>
          <p
            onClick={() => {
              value.setValue(false);
              value.setValue2(true);
              setEmail("");
              setPassword("");
            }}
          >
            Eu não tenho uma conta
          </p>
        </S.Login>
      )}

      {value.value2 && (
        <S.SignUp onSubmit={signUp}>
          {isLoading && <ModalSpinner />}
          {errorValue && <p>Erro no Registro. Verifique suas credenciais.</p>}

          <input
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            placeholder="Email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            placeholder="Senha"
            value={password}
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button>Cadastrar</button>
          <p
            onClick={() => {
              value.setValue(true);
              value.setValue2(false);
              setEmail("");
              setPassword("");
            }}
          >
            Eu já tenho uma conta
          </p>
        </S.SignUp>
      )}
    </>
  );
}
