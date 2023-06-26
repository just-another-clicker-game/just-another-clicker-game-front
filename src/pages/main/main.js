import React from "react";
import MainPageCss from "../../layout/Main/style";
import MainGame from "../game/mainGame";

export default function Main(){
    return(
        <MainPageCss.MainCss>
            <MainGame/>
        </MainPageCss.MainCss>
    )
}