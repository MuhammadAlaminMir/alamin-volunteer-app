import React from 'react';
import './list.css';
const List = (props) => {
    const removeEvent = props.removeEvent;
    const { _id, name, email, date, eventName } = props.volunteer;
    // console.log(name, email, date, eventName);
    return (
        <div className="list-style">
            <p>{name}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p>{eventName}</p>
            <p
                onClick={() => removeEvent(_id, email)}
                style={{
                    background: 'red',
                    height: '100%',
                    width: '5%',
                    borderRadius: '7px',
                    cursor: 'pointer',
                }}
            >
                <img
                    hight="80%"
                    width="80%"
                    src={require('../../logos/trash-2 9.png')}
                    alt=""
                />
            </p>
        </div>
    );
};

export default List;
