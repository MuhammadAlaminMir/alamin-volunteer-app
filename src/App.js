import React, { createContext, useState } from 'react';
import './App.css';
import LogIn from './components/Login/LogIn';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserEvents from './components/UserEvents/UserEvents';
import NoMatch from './components/NoMatch/NoMatch';
import Register from './components/Register/Register';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Admin from './components/Admin/Admin';
export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState({});
    return (
        <div style={{ textAlign: 'center' }}>
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
                <Router>
                    <Switch>
                        <Route path="/home">
                            <Home />
                        </Route>
                        <Route path="/login">
                            <LogIn />
                        </Route>
                        <Route path="/admin">
                            <Admin />
                        </Route>
                        <PrivateRoute path="/events">
                            <UserEvents />
                        </PrivateRoute>
                        <PrivateRoute path="/register/:id">
                            <Register />
                        </PrivateRoute>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route path="*">
                            <NoMatch />
                        </Route>
                    </Switch>
                </Router>
            </UserContext.Provider>
        </div>
    );
}

export default App;
