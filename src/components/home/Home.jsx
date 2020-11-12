import styled from 'styled-components';
import { device } from '../../utils/theme.util';

import { Github } from '@styled-icons/boxicons-logos/Github';
import { LinkedinSquare } from '@styled-icons/boxicons-logos/LinkedinSquare';
import { Email } from '@styled-icons/material/Email';

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

const Icons = styled.div`
    padding-top: 8px; 
    
    a {
        text-decoration: none;
        color: inherit;
        margin-right: 8px;
    }
`;

export function Home() {
    return (
        <Hero>
            <Header>Ben Lafferty</Header>
            <SubHeader>Backend & Systems Developer</SubHeader>
            <Icons>
                <a href={"https://github.com/tempor1s"} target={"_blank"} rel={"noreferrer"}><Github size={"35"} title={"GitHub"} /></a>
                <a href={"https://linkedin.com/in/benlaugherty"} target={"_blank"} rel={"noreferrer"}><LinkedinSquare size={"35"} title={"LinkedIn"} /></a>
                <a href={"mailto:me@benl.dev"} target={"_blank"} rel={"noreferrer"}><Email size={"35"} title={"Email"} /></a>
            </Icons>
        </Hero>
    );
}