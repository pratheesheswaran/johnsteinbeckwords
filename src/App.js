import React, { Component } from 'react';
import './App.css';
import Parallax from 'react-springy-parallax';

let data = require('./data.json');

class App extends Component {
  render() {
    return (
    <div className="App">
   
      {/* <div className="content"> */}
      <Parallax ref='parallax' pages={5} >
   <div>
   <div className='row'>
    <div className='column'>
      <div class='one-column'>
        John
      </div>
    </div>
    <div class='column'>
      <div class='two-column'>
        Steinbeck
      </div>
    </div>
    <div class='column'>
      <div class='three-column'>
        Words
      </div>
    </div>
  </div>
   </div>
        {data.map((quote) => (
          <Parallax.Layer
            offset={quote.offset}
            speed={quote.speed}>
            <span id={quote.id} style={{color:quote.color}} >
              {quote.quote}
            </span>

          </Parallax.Layer>
        ))}

      </Parallax>
      {/* </div> */}

    </div>
    )
  }
}

export default App;
