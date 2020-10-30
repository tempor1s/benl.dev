import React, { useEffect, useRef, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import GLOBE from 'vanta/dist/vanta.globe.min'

import { Home } from './home/Home'
import { theme } from '../utils/theme.util';
import { GlobalStyle } from '../shared-styles/global.styles';

const BaseContainer = styled.div`
    display: flex;
    min-height: 100vh;
    background-color: #151515;
    color: white;
`;

export function App() {
    const [vantaEffect, setVantaEffect] = useState(0);
    const ref = useRef(null);
    
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                GLOBE({
                    el: ref.current,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    scale: 1.00,
                    scaleMobile: 1.00,
                    color: 0x2aff00,
                    size: 1.10,
                    backgroundColor: 0x151515
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect]);
    
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <BaseContainer ref={ref}>
                <Home />
            </BaseContainer>
        </ThemeProvider>
    )
}
