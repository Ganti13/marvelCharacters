import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 150px;
    gap: 15px;
    justify-content: center;

    @media(max-width: 660px){
        flex-direction: column;
        align-items: center;
    }
`;

export const Loading = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;

    span{
        padding: 5px;
        color: white;
        font-size: 50px;
        letter-spacing: 2px;
    }
`;