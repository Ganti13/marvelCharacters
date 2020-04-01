import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useHistory } from 'react-router-dom';

import { Container, CharactersLink, Title } from './styles';


const Home = () => {
    const history = useHistory();

    useEffect(() => {
        window.document.title = 'Home'
    },[])

    return (
        <>
            <Header />
            <Container>
                <CharactersLink onClick={() => history.push('/heroes')} >
                    <Title>
                        Heróis
                    </Title>
                </CharactersLink >
                <CharactersLink onClick={() => history.push('/villains')} >
                    <Title>
                        Vilões
                    </Title>
                </CharactersLink >
                </Container>
            <Footer />
        </>
    );
}

export default Home;