import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
body{
    /* background-color: #bdc3c7; */
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
