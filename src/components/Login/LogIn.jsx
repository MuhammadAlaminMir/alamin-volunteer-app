import React, { useContext } from 'react';
import { UserContext } from '../../App';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import './LogIn.css';
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);
const LogIn = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    let history = useHistory();
    let location = useLocation();
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();

        let { from } = location.state || { from: { pathname: '/' } };
        firebase
            .auth()
            .signInWithPopup(provider)
            .then(function (result) {
                var user = result.user;
                const userDetails = {
                    name: user.displayName,
                    email: user.email,
                    isLogin: true,
                };
                setLoggedInUser(userDetails);
                history.replace(from);
            })
            .catch(function (error) {
                console.log(error.massage);
            });
    };
    return (
        <div id="login" className="d-flex justify-content-center ">
            <div className="image">
                <Link to="/home">
                    <img
                        src={require('../logos/Group 1329.png')}
                        alt=""
                        width="202px"
                        height="60px"
                    />
                </Link>
            </div>

            {
                <div className="googleLogin row ">
                    <div className="col-sm-12 gLogin">
                        <h2>Login With</h2>
                        <br />
                        <span className="d-flex justify-content-center ">
                            <div
                                onClick={handleGoogleSignIn}
                                className="style"
                                style={{ cursor: 'pointer' }}
                            >
                                <img
                                    src={require('./google.png')}
                                    alt=""
                                    height="30px"
                                    style={{
                                        float: 'left',
                                        borderRadius: '10px',
                                    }}
                                />
                                <p
                                    style={{
                                        display: 'inline',
                                        margin: '0 5px',
                                    }}
                                >
                                    Continue with Google
                                </p>
                            </div>
                        </span>

                        <br />
                        <p>
                            Don't have an account?&nbsp;
                            <span style={{ color: 'blue', cursor: 'pointer' }}>
                                Create an Account
                            </span>
                        </p>
                    </div>
                </div>
            }
        </div>
    );
};

export default LogIn;
