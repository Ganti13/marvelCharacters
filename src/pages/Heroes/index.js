import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Characters from '../../components/Characters';

import CharacterList from '../../services/CharactersList';
import { useEffect } from 'react';

const Heroes = () => {
  const HeroList = CharacterList.filter(characters => characters.type === 'hero');

  useEffect(() => {
    window.document.title = 'HERÓIS';
  },[])

  return (
    <>
      <Header />
      <Characters List={HeroList} />
      <Footer />
    </>
  );
}

export default Heroes;
