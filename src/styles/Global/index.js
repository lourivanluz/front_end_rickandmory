import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

html,body,img,svg,h1,h2,h3,h4,h5,div,main,aside,footer,input,p,span,ul,li{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
ul{
    list-style: none;
}
img{
    display: block;
    max-width: 100%;
}
button{
    display: block;
    cursor: pointer;
}

:root{
    --primary-Color:#057d9f;
    --midleDark-Color:#04607b;
    --dark-Color:#024c60;
    --midlelight-Color:#2989a4;
    --light-Color:#4b9fb7;
}

`;
