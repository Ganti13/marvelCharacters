import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Characters from '../../components/Characters';

import charactersList from '../../services/CharactersList';
import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom'

import { Container, Loading} from './styles';

const Villains = () => {
    const {characters} = useParams()
    const [list, setList] =useState([]);
    const [loading, setLoading] = useState(true)
    const history = useHistory();

    useEffect(() => {
        if(characters === 'villains'){
            window.document.title = 'Villains'
            const villains = charactersList.filter(character => character.type === 'villain')
            setList(villains)
        }else if(characters === 'heroes'){
            window.document.title = 'Heroes'
            const heroes = charactersList.filter(character => character.type === 'hero')
            setList(heroes)
        }else{
            history.push('/');
        }

        setLoading(false)
    },[characters])
    

    if(loading) return <Loading><span>Loading...</span></Loading>

    return ( 
        <>
            <Header />
            <Container>
                {list.map(character => (
                    <Characters key={character.name} character={character} />
                ))}
            </Container>
            <Footer />
        </>
    );
}

export default Villains;