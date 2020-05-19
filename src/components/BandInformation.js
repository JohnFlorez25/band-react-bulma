import React from 'react';

const BandInformation = (props) => {

    const { title, description } =  props;

    return (
        <>
            <h2 className="title">{title}</h2>
            <p>{description}</p>
        </>
    )
}

export default BandInformation;