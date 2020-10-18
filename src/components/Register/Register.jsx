import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import fakeData from '../fakeData/fakeData';
import './Register.css';
const Register = () => {
    const params = useParams();
    const [loggedInUser] = useContext(UserContext);
    const eventId = parseInt(params.id);
    const [allData, setAllData] = useState([]);
    const [registeredUser, setRegisteredUser] = useState({});
    // console.log(eventId);
    useEffect(() => {
        let data = fakeData;
        setAllData(data);
    }, []);
    const userEvent = allData.find((event) => event.id === eventId);
    // console.log(eventId);
    const handleBlur = (e) => {
        // console.log(userEvent);
        const userDetails = { ...registeredUser };
        userDetails[e.target.name] = e.target.value;
        userDetails.picture = userEvent.picture;
        userDetails.eventName = userEvent.name;

        // console.log(userDetails);
        setRegisteredUser(userDetails);
        // console.log(registeredUser);
    };
    // console.log(registeredUser);
    let history = useHistory();
    let { from } = { from: { pathname: '/events' } };
    const handleSubmit = (e) => {
        fetch('http://localhost:5000/addVolunteer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(registeredUser),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));

        history.replace(from);
        e.preventDefault();
    };

    return (
        <div
            className="d-flex justify-content-center"
            style={{ width: '100%', background: '#E5E5E5', height: '100vh' }}
        >
            <div className="image">
                <img
                    src={require('../logos/Group 1329.png')}
                    alt=""
                    width="202px"
                    height="60px"
                />
            </div>
            <div className="register  ">
                <div style={{ margin: '20px', padding: '8px 13px' }}>
                    <h2 style={{ float: 'left' }}>Register as a Volunteer</h2>
                    <br />
                    <br />
                    <form onSubmit={handleSubmit} className="registration">
                        <br />
                        <input
                            onBlur={handleBlur}
                            placeholder="Full Name"
                            required
                            type="text"
                            name="name"
                            defaultValue={
                                loggedInUser.name && loggedInUser.name
                            }
                        />
                        <br />
                        <input
                            onBlur={handleBlur}
                            placeholder="Username or Email"
                            type="email"
                            required
                            name="email"
                            id=""
                            defaultValue={
                                loggedInUser.email && loggedInUser.email
                            }
                        />
                        <br />

                        <input
                            onBlur={handleBlur}
                            placeholder="Date"
                            type="date"
                            required
                            name="date"
                        />
                        <br />
                        <input
                            onBlur={handleBlur}
                            placeholder="Description"
                            type="text"
                            required
                            name="description"
                            id=""
                        />
                        <br />
                        <input
                            onBlur={handleBlur}
                            placeholder="Organize books at the library"
                            type="text"
                            required
                            name="eventName"
                            defaultValue={userEvent && userEvent.name}
                        />

                        <span
                            style={{
                                width: '80%',
                                textAlign: 'center',
                            }}
                        >
                            <button
                                className="btn btn-primary "
                                style={{
                                    width: '80%',
                                }}
                            >
                                Registration
                            </button>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
