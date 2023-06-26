import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import MainGameCss from "../../layout/game/style";
import { AuthContext } from "../../provider/provider";

export default function MainGame() {
  const value = useContext(AuthContext);

  const storagePoints = localStorage.getItem("points")
    ? parseInt(localStorage.getItem("points"))
    : 0;
  const storagePerSecond = localStorage.getItem("perSecond")
    ? parseInt(localStorage.getItem("perSecond"))
    : 0;
  const storagePlusBuff = localStorage.getItem("plusBuff")
    ? parseInt(localStorage.getItem("plusBuff"))
    : 1;

  const [showFloatingOne, setShowFloatingOne] = useState(false);

  const [clickPosition, setClickPosition] = useState({ x: 0, y: 0 });

  const [points, setPoints] = useState(storagePoints);
  const [message, setMessage] = useState(false);

  const [plusBuff, setPlusBuff] = useState(storagePlusBuff);
  const [pricePlusTwo, setPricePlusTwo] = useState(5);

  const [priceAutoClick, setPriceAutoClick] = useState(15);
  const [bonusBought, setBonusBought] = useState(storagePerSecond);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(bonusBought);
      setPoints((prevPoints) => prevPoints + bonusBought); // adiciona o número de pontos por segundo de acordo com o número de bônus comprados
      setShowFloatingOne(false);
    }, 1000);
    return () => clearInterval(interval);
  }, [bonusBought]);

  function addPoint(event) {
    console.log(plusBuff);
    if (plusBuff > 1) {
      setPoints(points + plusBuff);
    } else {
      setPoints(points + 1);
    }

    setClickPosition({ x: event.clientX, y: event.clientY });
    setShowFloatingOne(true);
  }
  function buyPlus2() {
    if (points < pricePlusTwo) {
      setMessage(true);
      console.log(message);
      return setTimeout(() => setMessage(false), 5000);
    }
    setPoints(points - pricePlusTwo);
    setPlusBuff(plusBuff + 1);
    setPricePlusTwo(Math.floor(pricePlusTwo * 1.2));
  }

  function buyAutoClick() {
    if (points < priceAutoClick) {
      setMessage(true);
      console.log(message);
      return setTimeout(() => setMessage(false), 5000);
    }

    setPoints(points - priceAutoClick);
    setPriceAutoClick(Math.floor(priceAutoClick * 1.4));
    setBonusBought(bonusBought + 1);
    setShowFloatingOne(false); // Adicione essa linha para evitar que a animação seja mostrada ao comprar o autoclique
  }
  return (
    <>
      {message && (
        <ErrorMessage>VOCÊ NÃO TEM PONTOS SUFICIENTE PARA COMPRAR</ErrorMessage>
      )}
      <MainGameCss.GameCss onClick={value.clicked}>
        {showFloatingOne && (
          <MainGameCss.FloatingOne
            key={Date.now()}
            onAnimationEnd={() => setShowFloatingOne(false)}
            x={clickPosition.x}
            y={clickPosition.y}
          >
            +{plusBuff}
          </MainGameCss.FloatingOne>
        )}

        <div onClick={value.clicked}>
          <MainGameCss.PowerUp>
            <h2>{pricePlusTwo}</h2>
            <button onClick={buyPlus2}>+2 on click</button>
          </MainGameCss.PowerUp>
        </div>

        <MainGameCss.MainButton onClick={value.clicked}>
          <h1 className="points">{points}</h1>
          <button className="button" onClick={(event) => addPoint(event)}>
            clique-me
          </button>
        </MainGameCss.MainButton>

        <MainGameCss.PowerUp onClick={value.clicked}>
          <h2>{priceAutoClick}</h2>
          <button onClick={buyAutoClick}>+1 per second</button>
        </MainGameCss.PowerUp>
      </MainGameCss.GameCss>
    </>
  );
}


const ErrorMessage = styled.div`
  color: RED;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: -15px;
  margin-bottom: 5px;
`;
