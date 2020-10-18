import React, { useEffect } from 'react';
import { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getDatabaseCart, getDataKey } from '../BrowserStorage/Storage';
import fakeData from '../fakeData/fakeData';
const Events = () => {
    const [Data, setData] = useState([]);
    useEffect(() => {
        const eventInfo = fakeData;
        setData(eventInfo);
    }, []);

    const addEvent = (name, id) => {
        // push to local storage: a temporary place for database

        const currentEvent = getDatabaseCart();
        currentEvent[name] = id;
        localStorage.setItem(getDataKey(), JSON.stringify(currentEvent));
        // console.log(Object.values(currentCart));
    };
    return (
        <div className="container">
            <div className="row">
                {Data.map((event) => {
                    return (
                        <Card
                            onClick={() => addEvent(event.name, event.id)}
                            key={event.id}
                            style={{
                                zIndex: '1',
                                border: 'none',
                                background: 'inherit',
                                marginTop: '10px',
                                position: 'relative',
                            }}
                            className="col-lg-3 col-md-4 col-sm-6"
                        >
                            <Link to={`/register/${event.id}`}>
                                <Card.Img
                                    className="cardImg"
                                    variant="top"
                                    height="80%"
                                    src={event.picture}
                                />
                                <Card.Title
                                    style={{
                                        background: 'gray',
                                        height: '60px',
                                        padding: '5px',
                                        overflow: 'hidden',
                                        textDecoration: 'none',
                                        color: 'white',
                                    }}
                                >
                                    {event.name}
                                </Card.Title>
                            </Link>
                        </Card>
                    );
                })}
            </div>
        </div>
    );
};

export default Events;
