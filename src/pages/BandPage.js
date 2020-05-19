import React from 'react';
import BandInformation from '../components/BandInformation';

import bandInformation from '../utils/mocks/band-description';

const BandPage = () => {

    return(
        <section className="section">
            <div className="container has-text-centered">
                <BandInformation 
                    title = {bandInformation.title}
                    description = {bandInformation.description}
                />
            </div>
        </section>
    )

}

export default BandPage;