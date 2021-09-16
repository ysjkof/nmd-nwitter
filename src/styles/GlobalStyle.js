import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
@font-face {
    font-family: 'GowunDodum-Regular';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*{
    box-sizing: border-box;
}
body{
    font-family: 'GowunDodum-Regular';
    background-color: rgba(0,0,0,0.9);
}
input, button{
    border:solid 1px;
    border-radius: 8px;
    background-color: white;
}
button{
    cursor:pointer;
}
a{
    color:black;
    text-decoration: none;
}
`;

export default GlobalStyle;
