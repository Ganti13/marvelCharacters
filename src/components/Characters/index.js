

import { useHistory } from 'react-router-dom';
import { Phrase, Character, Wrapper, ReadMore } from './styles';

const Characters = ({character}) => {
    const history = useHistory();

    return (
        <Wrapper>
            <Phrase>{character.phrase}</Phrase>
            <ReadMore onClick={() => history.push(`/characterdetails/${character.name}`)}>
                Read More
            </ReadMore>
            <Character src={character.image} alt='image'/>
        </Wrapper>            
    );
}

export default Characters;