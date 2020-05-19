import React from 'react';

const BandInformation = ({ information }) => {

    const { title, description } =  information;

    return (
        <>
            <h2 className="title">{ title }</h2>
            <p>{ description }</p>
        </>
    )
}

export default BandInformation;