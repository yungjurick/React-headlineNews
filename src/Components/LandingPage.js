import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../Assets/logo.svg';
import myLogo from '../Assets/myLogo.png';

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background: black;
`;

const Title = styled.h1`
    font-size: 3rem;
    color: white;
    margin-bottom: 0.5rem;
`;

const Subtitle = styled.h2`
    font-size: 1.5rem;
    margin-top: 0;
    padding-bottom: 2rem;
    color: white;
`;

const LinkButton = styled(Link)`
    border: 0.5rem solid white;
    border-radius: 4px;
    color: white;
    padding: 0.75rem 2rem;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.5rem;
    &:hover {
        background: white;
        color: black;
    }
`

const Logo = styled.img`
    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }
    animation: App-logo-spin infinite 20s linear;
    height: 40vmin;
`
const MyLogo = styled.img`
    align-self: flex-start;
    height: 6vmin;
    padding: 1rem 2rem;
`;

class LandingPage extends Component {
    render() {
        return (
            <>
              <Container>
                <MyLogo src={myLogo}></MyLogo>
                <Logo src={logo} alt="Logo"></Logo>
                <Title>A Simple React News API Project</Title>
                <Subtitle>Created using Create-React-App</Subtitle>
                <LinkButton to='/categories'>NEXT</LinkButton>   
              </Container>
            </>
        );
    }
}

export default LandingPage;