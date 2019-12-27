import React from 'react';
function ReaderMode(props) {
  const greeting = 'Hello Function Component!';

  return (
      <div>
          <p onClick={props.toggleReaderMode} style={{ color: "#ffc93c" }} >normal mode</p>
          <div className="nmContainer">
                 {props.data.map((quote) => (
       
                <p id="rmBlock" style={{ color: quote.color }} >
                  {quote.quote}
                </p>
                
            ))}
            </div>
      </div>
  );
}
export default ReaderMode;