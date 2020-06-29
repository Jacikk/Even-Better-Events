import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import SingUp from './pages/SingUp';
import SingIn from './pages/SingIn';
import Event from './pages/Event';
import Perfil from './pages/Perfil';
import DataPage from './pages/DataPage';
import Certificates from './pages/Certificates';
import EventManager from './pages/EventManager';


const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/SingUp" component={SingUp} />
            <Route exact path="/SingIn" component={SingIn} />
            <Route exact path="/Event" component={Event} />
            <Route exact path="/Perfil" component={Perfil} />
            <Route exact path="/DataPage" component={DataPage} />
            <Route exact path="/Certificates" component={Certificates} />
            <Route exact path="/EventManager" component={EventManager} />
        </ Switch>
    </BrowserRouter>
);

export default Routes;