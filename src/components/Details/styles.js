import styled from 'styled-components';

export const Container = styled.div`
    padding: 85px 0 0 0;
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;

`;

export const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    min-height: calc(100vh - 85px);
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    @media(max-width: 660px){
        width: 90%;
    }
`;

export const Name = styled.h1`
    color: #fff;
    padding: 20px 0 0 0;
`;

export const Info = styled.p`
    color: #fff;
    width: 80%;
    text-align: center;
    margin: 40px 0;

    @media(max-width: 660px){
        width: 90%;
    }
`;