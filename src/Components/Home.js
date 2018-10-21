import React from 'react';
import styled from 'styled-components';

const Text = styled.h1`
    text-align: center;
    font-size: 2rem;
    padding: 40vh 2rem;
`;
const Home = ({match}) => {
    return (
        <>
            <Text>Please Select Your Interest Above to See The Recent News!</Text>
        </>
    );
};

export default Home;