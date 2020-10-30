import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif, Arial, Helvetica !important;
    }
    #root {
        overflow: hidden;
    }
    button {
        cursor: pointer;
        border-top: none;
        border: none;
    }
`;
