
import { useParams , Redirect} from 'react-router-dom';
import CharactersList from '../../services/CharactersList';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Details from '../../components/Details';
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
            {search.length > 0 ? <Details character={search} />: <Redirect to='/' />}
            <Footer />
        </ >
    );
}

export default CharacterDetails;