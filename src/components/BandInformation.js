import React from 'react';

const BandInformation = (props) => {
    return (
        <>
            <h2 className="title">{props.title}</h2>
            <p>{props.description}</p>
        </>
    )
}

export default BandInformation;