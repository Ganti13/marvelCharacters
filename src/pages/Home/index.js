import { useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import MainHome from '../../components/MainHome';


const Home = () => {

    useEffect(() => {
        window.document.title = 'HOME'
    },[])

    return (
        <>
            <Header />
            <MainHome />
            <Footer />
        </>
    );
}

export default Home;