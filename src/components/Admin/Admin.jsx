import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Admin.css';
import List from './list/List';
const Admin = () => {
    const [allVolunteers, setAllVolunteers] = useState([]);
    const [addEvent, setAddEvent] = useState(true);
    useEffect(() => {
        fetch('http://localhost:5000/allVolunteers')
            .then((res) => res.json())
            .then((data) => setAllVolunteers(data));
    }, []);

    const removeEvent = (id, email) => {
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
            .then((data) => setAllVolunteers(data));
    };
    return (
        <div>
            <header className="row" style={{ margin: '20px 0px' }}>
                <div className="col-md-2">
                    <img
                        height="40px"
                        src={require('../logos/Group 1329.png')}
                        alt=""
                    />
                </div>
                <div className="col-md-8">
                    <h3 style={{ float: 'left' }}>Volunteer register list:</h3>
                </div>
                <div className="col-md-2">
                    <Link to="/home">
                        {' '}
                        <button className="btn btn-primary">Home</button>
                    </Link>
                </div>
            </header>
            <div className="row">
                <div
                    className="col-lg-2
                col-md-2"
                >
                    <div style={{ float: 'right', marginTop: '30px' }}>
                        <p
                            onClick={() => setAddEvent(false)}
                            style={{ color: 'blue', cursor: 'pointer' }}
                        >
                            Volunteer register list
                        </p>
                        <p
                            onClick={() => setAddEvent(true)}
                            style={{ cursor: 'pointer' }}
                        >
                            + Add event
                        </p>
                    </div>
                </div>
                <div
                    className="col-lg-10 col-md-10"
                    style={{ position: 'relative' }}
                >
                    <div
                        style={{
                            background: '#E5E5E5',
                            position: 'absolute',
                            top: 0,
                            height: '700px',
                            width: '95%',
                        }}
                    >
                        {' '}
                        {!addEvent && (
                            <div
                                style={{
                                    background: 'white',
                                    position: 'relative',
                                    top: '4%',
                                    left: '3%',
                                    height: '90%',
                                    width: '94%',
                                }}
                            >
                                {' '}
                                <>
                                    <div className="list-header">
                                        <p>Name</p>
                                        <p>Email ID</p>
                                        <p>Registering date</p>
                                        <p>Volunteer list</p>
                                        <p>Action</p>
                                    </div>
                                    {allVolunteers.map((volunteer) => {
                                        return (
                                            <List
                                                key={volunteer._id}
                                                volunteer={volunteer}
                                                removeEvent={removeEvent}
                                            />
                                        );
                                    })}
                                </>
                            </div>
                        )}
                        {addEvent && (
                            <div
                                style={{
                                    background: 'white',
                                    position: 'relative',
                                    top: '4%',
                                    left: '3%',
                                    height: '50%',
                                    width: '94%',
                                }}
                            >
                                {addEvent && (
                                    <div className="row addEvent">
                                        <div
                                            className="col-md-6 col-lg-6  "
                                            style={{
                                                marginTop: '30px',
                                            }}
                                        >
                                            <div className="col-md-10">
                                                <br />
                                                <b style={{ float: 'left' }}>
                                                    Event Title
                                                </b>

                                                <br />
                                                <input
                                                    type="text"
                                                    name="event"
                                                    placeholder="Event Title"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-md-10">
                                                <br />
                                                <b style={{ float: 'left' }}>
                                                    Description
                                                </b>

                                                <br />
                                                <textarea
                                                    className="form-control"
                                                    name="description"
                                                    placeholder="Description"
                                                    id=""
                                                    cols="10"
                                                    rows="4"
                                                ></textarea>
                                            </div>
                                        </div>
                                        <div
                                            className="col-md-6 col-lg-6  "
                                            style={{
                                                marginTop: '30px',
                                            }}
                                        >
                                            <div className="col-md-10">
                                                <br />
                                                <b style={{ float: 'left' }}>
                                                    Event Title
                                                </b>

                                                <br />
                                                <input
                                                    type="date"
                                                    name="event"
                                                    placeholder="Event Title"
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="col-md-10">
                                                <br />
                                                <b style={{ float: 'left' }}>
                                                    Description
                                                </b>

                                                <br />
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;
