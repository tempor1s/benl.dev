import styled from 'styled-components';

import { device } from '../../utils/theme.util';

const Hero = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: left;
    padding-top: 100px;
    padding-left: 100px;

    @media ${device.mobileL} {
        justify-content: flex-center;
        align-items: center;
        padding-left: 30px;
    }
`;

const Header = styled.h1`
    font-size: 50px;

    @media ${device.mobileL} {
        align-items: center;
        font-size: 45px;
    }
`;

const SubHeader = styled.h3`
    font-size: 20px;

    @media ${device.mobileL} {
        align-items: center;
        font-size: 16px;
    }
`;

export function Home() {
    return (
        <Hero>
            <Header>Ben Lafferty</Header>
            <SubHeader>Backend & Systems Developer</SubHeader>
        </Hero>
    );
}