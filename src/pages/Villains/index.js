import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Characters from '../../components/Characters';

import charactersList from '../../services/CharactersList';
import { useEffect } from 'react';

const Villains = () => {
    const villainsList = charactersList.filter(character => character.type === 'villain');

    useEffect(() => {
        window.document.title = 'VILÕES';
    },[])
    return ( 
        <>
            <Header />
            <Characters List={villainsList} />
            <Footer />
        </>
    );
}

export default Villains;