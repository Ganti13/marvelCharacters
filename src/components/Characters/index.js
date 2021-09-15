

import { useHistory } from 'react-router-dom';
import { Phrase, Character, Container, Wrapper, ReadMore } from './styles';

const Characters = ({List}) => {
    const history = useHistory();

    return (
        <Container>
            {List.map(character => (
                <Wrapper key={character.name}>
                    <Phrase>{character.phrase}</Phrase>
                    <ReadMore onClick={() => history.push(`/characterdetails/${character.name}`)}>
                        Read More
                    </ReadMore>
                    <Character src={character.image} alt='image'/>
                </Wrapper>
            ))}
            
        </Container>
    );
}

export default Characters;