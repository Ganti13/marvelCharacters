import styled from 'styled-components';

export const Container = styled.header`
    width: 100%;
    height: 60px;
    background-color: #1c1c1c;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    z-index: 999;
`;

export const Logo = styled.div`
    width: 75px;
    height: 40px;
    margin: 0 5%;
    
    img{
        width: 100%;
        height: 100%;
        border-radius: 5px;
    }
`;

export const Nav = styled.ul`
    display: flex;
    gap: 25px;
    margin: 0 5%;
    font-size: 20px;
    font-weight: 700;
    

    @media(max-width: 660px){
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin: 0;
        gap: 50px;
        height: 100vh;
        padding-top: 20px;
        position: absolute;
        background-color: #1c1c1c;
        top: 60px;
        transition: all ease .5s;
        transform: translateX(101%);
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        background-image: url('/img/black-portal.png');

        &::after,
        &::before{
            content: '';
            height: 50%;
            width: 100%;
            position: absolute;
            z-index: 2;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
        }

        &::after{
            bottom: 60px;
            background-image: url('/img/loki.png');
        }

        &::before{
            z-index: 1;
            height: 100%;
            width: 90%; 
            background-image: url('/img/green2.png');
        }

        &.active {
            transform: translateX(0);
        }
    }
`;

export const Links = styled.li`
    color: #fff;
    cursor: pointer;
    z-index: 99;
    text-shadow: 2px 2px #f00;
    letter-spacing: 3px;
`;

export const Menu = styled.div`

    padding: 15px 5px;
    width: 25px;
    height: 4px;
    cursor: pointer;
    margin: 0 5%;

    span {
        width: 25px;
        height: 4px;
        background-color: #fff;
        display: none;
        position: relative;
        transition: all ease .3s;
        
        &.active{
            transform: rotate(45deg);
            &::before,
            &::after{
                transform: rotate(-90deg);
            }
        }
        &::before,
        &::after{
            content: '';
            width: 100%;
            height: 100%;
            position: absolute;
            background-color: #fff;
            transition: all ease .3s;
            
        }
        &::before{
            transform: translateY(-140%);
            
        }
        &::after{
            transform: translateY(140%);
        }

        @media(max-width: 660px){
            display: block;
        }
    }
`;