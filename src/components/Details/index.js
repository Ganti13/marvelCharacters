
import { Container, Name, Info, Wrapper } from './styles';

const Details = ({ character }) => {
    
    return (
        <Container>
            <Wrapper>
                <Name>{character[0].name}</Name>
                <Info dangerouslySetInnerHTML={{__html: character[0].info}} />
            </Wrapper>
        </Container>
    );
}

export default Details;