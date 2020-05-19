import React from 'react';
import BandMusician from './BandMusician';

class BandMusicians extends React.Component {
  render() {
    const musicTest = [1, 2, 3];
    return (
      <div className='columns is-centered' style={{ padding: '2rem' }}>
        {musicTest.map(() => {
          return <BandMusician />;
        })}
      </div>
    );
  }
}

export default BandMusicians;
