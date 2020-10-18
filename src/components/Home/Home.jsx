import React from 'react';
import { Button } from 'react-bootstrap';
import Events from '../Events/Events';
import Header from '../Header/Header';
import './Home.css';
const Home = () => {
    return (
        <div style={{ background: '#f8f7f7bb' }}>
            <div>
                <div id="header">
                    <Header />
                    <br />
                    <br />
                    <div id="textarea">
                        <h1>I grow by helping people in need.</h1>
                        <br />
                        <input
                            type="search"
                            style={{
                                height: '40px',
                                width: '300px',
                                border: 'none ',
                                padding: '10px',
                                borderRadius: '5px',
                                display: 'inline-block',
                            }}
                            placeholder="search"
                            id=""
                        />
                        <Button
                            style={{
                                position: 'relative',
                                top: '-3px',
                                left: '-5px',
                            }}
                            className="btn btn-primary"
                        >
                            Search
                        </Button>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div id="event">
                <Events />
            </div>
        </div>
    );
};

export default Home;
