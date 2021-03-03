import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    useHistory,
    Redirect
  } from "react-router-dom";

import Login from './pages/login';
import Platos from './pages/platos';
import Recibos from './pages/recibos';
import Usuarios from './pages/usuarios';

function MainRouter() {
    const auth = useSelector((state) => state.auth)
    const userAuthenticated = auth.authenticated.data

    const PrivateRoute = (props) => {
        if(userAuthenticated){
            return <Route {...props} />
        }
        return <Redirect to='/login' />
        
    }

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={() => <Redirect to={userAuthenticated ? '/platos' : '/login'} />} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/platos" component={Platos} />
                <PrivateRoute exact path="/recibos" component={Recibos} />
                <PrivateRoute exact path="/usuarios" component={Usuarios} />
            </Switch>
        </Router>
    )
}

export default MainRouter