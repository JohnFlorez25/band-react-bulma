import React from 'react';
import BandInformation from '../components/BandInformation';
import BandMusicians from '../components/BandMusicians';

import bandInformation from '../utils/mocks/band-description';

const BandPage = () => {

    return(
        <section className="section">
            <div className="container has-text-centered">
                <BandInformation 
                    title = {bandInformation.title}
                    description = {bandInformation.description}
                />
                <BandMusicians />
            </div>
        </section>
    )

}

export default BandPage;