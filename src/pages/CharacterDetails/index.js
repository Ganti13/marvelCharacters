
import { useParams , Redirect} from 'react-router-dom';
import CharactersList from '../../services/CharactersList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Container, Name, Info, Wrapper } from './styles';
import { useEffect } from 'react';

const CharacterDetails = () => {
    const { character } = useParams();
    const search = CharactersList.filter(result => result.name === character);

    useEffect(() => {
        window.document.title = search[0].name.toUpperCase();
    },[])

    return (
        <>
            <Header />
            {search.length > 0 ? 
            <Container>
                {search.map(characters => (
                    <Wrapper key={characters.name}>
                        <Name>{characters.name}</Name>
                        <Info dangerouslySetInnerHTML={{__html: characters.info}} />
                    </Wrapper>
                ))}
            </Container>
            : <Redirect to='/' />}
            <Footer />
        </ >
    );
}

export default CharacterDetails;