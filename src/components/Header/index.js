import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { 
Container,
Logo,
Nav,
Menu,
Links
} from './styles';


const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const history = useHistory();
    return (
        <Container>
            <Logo >
                <img src='/img/Marvel.png' alt='Logo da Marvel' onClick={() => history.push('/')}/>
            </Logo>
            <Menu onClick={() => {setOpenMenu(!openMenu)}} >
                <span className={openMenu && 'active'} />
            </Menu>
            <Nav className={openMenu && 'active'}>
                <Links onClick={() => history.push('/')}>HOME</Links>
                <Links onClick={() => history.push('/heroes')}>HERÓIS</Links>
                <Links onClick={() => history.push('/villains')}>VILÕES</Links>
            </Nav>
        </Container>
    );
}

export default Header;