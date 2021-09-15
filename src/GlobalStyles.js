import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul{
    list-style: none;
}
body,
html{
    background: linear-gradient(90deg, #111, #111, #1f1f1f, #1f1f1f,  #1f1f1f, #111, #111);
    font-family:  sans-serif;
}
`;

export default GlobalStyles;