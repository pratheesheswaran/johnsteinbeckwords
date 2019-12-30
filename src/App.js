import React, { Component } from 'react';
import './App.css';
import Parallax from 'react-springy-parallax';
import ReaderMode from './ReaderMode'

let data = require('./data.json');

class App extends Component {
  state = {
    readerMode: false
  }
  toggleReaderMode = () => {
    this.setState({ readerMode: !this.state.readerMode })
  }
  render() {
    return (
      <div className="App">
  
        {this.state.readerMode ? 
        
        <ReaderMode data={data} toggleReaderMode={this.toggleReaderMode}></ReaderMode>
        :
          <Parallax ref='parallax' pages={6} >
            <div>
            <p style={{ color: "#ffc93c" }} onClick={this.toggleReaderMode} className='modes'>reader</p>
              <div className='row'>
                <div className='column'>
                  <div className='one-column'>
                    John
      </div>
                </div>
                <div className='column'>
                  <div className='two-column'>
                    Steinbeck
      </div>
                </div>
                <div className='column'>
                  <div className='three-column'>
                    Words
      </div>
                </div>
              </div>
            </div>
            {data.map((quote) => (
              <Parallax.Layer
                offset={quote.offset}
                speed={quote.speed}>
                <span id={quote.id} style={{ color: quote.color}} >
                  {quote.quote}
                </span>

              </Parallax.Layer>
            ))}

          </Parallax>
        }
      </div>
    )
  }
}

export default App;