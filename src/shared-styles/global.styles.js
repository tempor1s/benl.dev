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

    html:before {
        content: '';
        position: fixed;
        width: 100%;
        height: 999px;
        top: -999px;
        background-color: #151515
    }
`;
