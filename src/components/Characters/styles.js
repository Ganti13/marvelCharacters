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

export const Phrase = styled.p`
    color: #fff;
    width: 50%;
    font-size: 25px;
    transform: translateX(50%) scale(0);
    opacity: 0;
    display: flex;
    align-items: center;
    padding: 15px;
    transition: all ease .5s;
    z-index: 1;

    @media(max-width: 660px){
        font-size: 18px;
    }
`;

export const Character = styled.img`
    min-height: 230px;
    max-height: 230px;
    position: absolute;
    bottom: 0;
    right: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 3;

    transition: all ease .5s;
`;

export const ReadMore = styled.button`
    cursor: pointer;
    height: 30px;
    padding: 0 10px;
    position: absolute;
    border-radius: 0;
    background-color: #fff;
    border: none;
    bottom: 15px;
    left: 15px;
    opacity: 0;
    transform: translateX(150%) scale(0);
    transition: all ease .5s;
     z-index: 1;

    &:hover{
        transition: all ease .3s;
        opacity: .5;
    }
`;

export const Wrapper = styled.section`
    width: 45%;
    min-width: 45%;
    height: 200px;
    border-radius: 10px;
    background: linear-gradient(90deg,  transparent, #1f2f2f , transparent);
    box-shadow: inset -2px -2px 5px #000, inset 2px 2px 5px #000, 0 -2px 3px #fff;
    display: flex; 
    align-items: center;
    position: relative;
    margin-bottom: 75px;
    transition: all ease .4s;


    &:hover{
        /* background: linear-gradient(90deg,  #1f2f2f , transparent ); */
        border-left: 1px solid #fff;
        ${Phrase}{
            transform: translateX(0) scale(1);
            opacity: 1;
        }

        ${Character}{
            transform: translateX(25%) translateY(-10%) scale(1.2);

            @media(max-width: 660px){
                transform: translateX(0) translateY(-10%) scale(1.2);
            }
        }

        ${ReadMore}{
            opacity: 1;
            transform: translateX(0) scale(1);
        }
    }

    @media(max-width: 660px){
        width: 97%;
        align-items: center;
    }
`;


