import React, { useRef } from 'react'
import styled, { ThemeProvider } from 'styled-components';

import { Home } from './home/Home'
import { theme, device } from '../utils/theme.util';
import { GlobalStyle } from '../shared-styles/global.styles';

const BaseContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #151515;
    color: white;
`;

export function App() {
    const ref = useRef(null);
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BaseContainer ref={ref}>
                <Home />
            </BaseContainer>
        </ThemeProvider>
    )
}
