import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    padding: 110px 0 0 0 ;
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
    position: relative;
    gap: 60px;
    @media(max-width: 660px){
        padding: 90px 0 0 0;
        gap: 30px;
        
        &::after,
        &::before{
            display: none;
        }
    }

    &::after,
    &::before{
        content: '';
        height: calc(100% - 65px);
        width: 50%;
        position: absolute;
        bottom: 0;
        background-size: contain;
        background-position: center;
        z-index: 1;
        background-repeat: no-repeat;
    }

    &::after{
        right: 0;
        background-image: url('/img/Ultron.png');
    }

    &::before{
        left: 0;
        background-image: url('/img/Homemdeferro.png');
    }
`;

export const Title = styled.h1`
    color: #fff;
    width: 400px;
    height: 125px;
    background-color: rgba(0,0,0, .7);
    font-size: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 10px;
    border-radius: 10px;
    font-weight: 900;
    position : absolute;
    transform: scale(0);
    opacity: 0;
    cursor: pointer;
    transition: all ease .6s;

    @media(max-width: 660px){
        height: 75px;
        font-size: 30px;
        width: 300px;
        letter-spacing: 0px;
    }
`;

export const CharactersLink = styled.div`
    width: 250px;
    height: 250px; 
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 2;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;

    &:hover{

        ${Title}{
            transform: scale(1);
            opacity: 1;
        }
    }

    @media(max-width: 660px){
        height: 200px;
    }

    &:nth-child(1){
        background-image: url('/img/avengers.png');
    }

    &:nth-child(2){
        background-image: url('/img/hydra.png');
    }
`;

