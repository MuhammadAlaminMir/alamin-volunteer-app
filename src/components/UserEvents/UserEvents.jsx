import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { UserContext } from '../../App';
// import { getDatabaseCart } from '../BrowserStorage/Storage';
// import fakeData from '../fakeData/fakeData';
import Header from '../Header/Header';
import './style.css';
const UserEvents = () => {
    // const [allData, setAllData] = useState([]);
    const [selectedEvents, setSelectedEvents] = useState([]);
    const [loggedInUser] = useContext(UserContext);

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:5000/eventByEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: loggedInUser.email,
                }),
            })
                .then((res) => res.json())
                .then((data) => setSelectedEvents(data));
        }, 1000);
    }, [loggedInUser]);

    // let history = useHistory();
    // let { from } = { from: { pathname: '/events' } };
    const removeEvent = (id, email) => {
        console.log(id, email);
        fetch('http://localhost:5000/removeEvent', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                _id: id,
                email: email,
            }),
        })
            .then((res) => res.json())
            .then((data) => setSelectedEvents(data));
    };

    return (
        <div id="UserEvents">
            <div>
                <Header />
            </div>{' '}
            <div className="container" style={{}}>
                {selectedEvents.map(
                    (event) =>
                        event !== undefined && (
                            <div key={event._id} className="events">
                                <div
                                    className="image"
                                    style={{
                                        position: 'relative',
                                        top: 2,
                                    }}
                                >
                                    <img
                                        width="30%"
                                        height="100%"
                                        src={event.picture}
                                        alt=""
                                        style={{
                                            float: 'left',
                                            margin: '15px',
                                        }}
                                    />
                                </div>
                                <div
                                    className="details"
                                    style={{
                                        position: 'relative',
                                        top: 10,
                                        left: -25,
                                    }}
                                >
                                    <h3>{event.name}</h3>
                                    <p>{event.date}</p>
                                    <br />
                                    <button
                                        onClick={() =>
                                            removeEvent(
                                                event._id,
                                                loggedInUser.email
                                            )
                                        }
                                        style={{ border: 'none' }}
                                    >
                                        cancel
                                    </button>
                                </div>
                            </div>
                        )
                )}
            </div>
        </div>
    );
};

export default UserEvents;
