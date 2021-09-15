import { useHistory } from 'react-router-dom';

import { Container, CharactersLink, Title } from './styles';

const MainHome = () => {
    const history = useHistory();

    return(
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
    );
}

export default MainHome;