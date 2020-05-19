import React from 'react';
import BandInformation from '../components/BandInformation';
import BandMusicians from '../components/BandMusicians';

import bandMocks from '../utils/mocks/band-mocks';

const BandPage = () => {

    return(
        <section className="section">
            <div className="container has-text-centered">
                <BandInformation 
                    information = {bandMocks.information}
                />
                <BandMusicians 
                    musicians = {bandMocks.musicians}
                />
            </div>
        </section>
    )

}

export default BandPage;