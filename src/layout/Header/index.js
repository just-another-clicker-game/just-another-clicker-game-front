import { API_BASE_URL, PROFILES } from "../../services/constants";
import ProductsContext from "../../hooks/ProductsContext";
import SessionContext from "../../hooks/SessionContext";
import { useCallback, useContext, useRef } from "react";
import { AuthContext } from "../../provider/provider";
import Login from "../../components/Login";
import * as S from "./style";
import axios from "axios";
import logo from '../../assets/images/tittle.png'

const Header = () => {
  const { cart } = useContext(ProductsContext);
  const session = useContext(SessionContext);
  const value = useContext(AuthContext);
  const refImage = useRef(
    PROFILES[Math.floor(Math.random() * PROFILES.length)]
  );

  const updateProfilePicture = useCallback(async () => {
    const newImage = prompt("Coloque a URL da imagem");
    if (!newImage) return;
    const { config, setSession } = session;
    if (!config) return alert("Precisa se logar para troca de imagem!");
    try {
      await axios.post(`${API_BASE_URL}/update-img`, { img: newImage }, config);
      setSession({ ...session, image: newImage });
    } catch ({ response }) {
      console.log(response);
    }
  }, [session]);

  const signOut = useCallback(() => {
    if (!window.confirm("Tem certeza que quer sair?")) return;
    session.setSession(null);
  });

  return (
    <>
      <Login />
      <S.Container onClick={value.clicked}>
        <img src={logo}/>
        <S.Wrap>
          {!session.name ? (
            <S.SignButton
              ref={value.loginRef}
              onClick={() => value.setValue2(false)}
            >
              Login
            </S.SignButton>
          ) : (
            <>
              <S.ButtonsContainer>
              </S.ButtonsContainer>
              <S.Username onClick={signOut}>
                Bem-vindo
                <p>{session.name}</p>
              </S.Username>
            </>
          )}
          <S.ProfilePicture
            onClick={updateProfilePicture}
            src={session.image ? session.image : refImage.current}
          />
        </S.Wrap>
      </S.Container>
    </>
  );
};

export default Header;
