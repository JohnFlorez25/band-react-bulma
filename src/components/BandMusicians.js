import React from 'react';
import BandMusician from './BandMusician';

class BandMusicians extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {

      }
  }

  render() {
    //const musicTest = [1, 2, 3];
    return (
      <div className='columns is-centered' style={{ padding: '2rem' }}>
        {this.props.musicians.map(  ( musician ) => {
          return <BandMusician 
                    key={`music-${musician.id}`} 
                    musician = { musician }
                />;
        })}
      </div>
    );
  }
}

export default BandMusicians;