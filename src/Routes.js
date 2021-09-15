import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Heroes from './pages/Heroes';
import Villains from './pages/Villains';
import Home from './pages/Home';
import CharacterDetails from './pages/CharacterDetails';

const Routes = () => (

    <BrowserRouter>
        <Switch>
            <Route exact path='/heroes' component={Heroes}/>
            <Route exact path='/villains' component={Villains}/>
            <Route exact path='/characterdetails/:character' component={CharacterDetails}/>
            <Route exact path='/' component={Home}/>
            <Route path='*' component={()=>(<h1>page not found</h1>)} />
        </Switch>
    </BrowserRouter>
);

export default Routes;