import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './screens/home/Home';
import Details from './screens/details/Details';

const App = () => {
    return (  
        <Switch>
            <Route exact path='/details/:id' component={Details} />
            <Route path='/' component={Home} />
        </Switch>
    );
}
 
export default App;