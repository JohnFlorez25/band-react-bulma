import React from 'react';
import BandMusician from './BandMusician';

class BandMusicians extends React.Component {
  
    constructor(props){
      super(props);
      this.state = {
         number : 20
      }
  }

  _aumentarContador = () => {
      this.setState({
          number : this.state.number + 1
      })
  }

  _disminuirContador = () => {
    this.setState({
        number : this.state.number - 1
    })
}

  render() {
    //const musicTest = [1, 2, 3];
    return (
      <>
      <div className='columns is-centered' style={{ padding: '2rem' }}>
        {this.props.musicians.map(  ( musician ) => {
          return <BandMusician 
                    key={`music-${musician.id}`} 
                    musician = { musician }
                />;
        })}
      </div>
      <div className="box is-centered">
            <h1 className="title">
                {this.state.number}
            </h1>
            <div className="buttons is-centered">
                <button 
                    onClick={this._disminuirContador}
                    className="button is-info"
                >
                    Decrementar
                </button>
                <button 
                    onClick={this._aumentarContador}
                    className="button is-success"
                >
                    Incrementar
                </button>
            </div>
      </div>
      </>
    );
  }
}

export default BandMusicians;