import React, { useState } from 'react';

import './App.scss';

import butterfly from './assets/images/butterfly.gif';
import flower from './assets/images/flower.png';

function App() {
  const [coordinatesBF, setCoordinatesBF] = useState({
    x: '20px',
    y: '20px',
  });
  const [coordinatesCS, setCoordinatesCS] = useState({
    x: '20px',
    y: '20px',
  });
  return (
    <div
      className='container'
      onMouseMove={({ clientX, clientY }) => {
        setCoordinatesBF({
          x: clientX - 75,
          y: clientY - 75,
        });
        setCoordinatesCS({
          x: clientX - 100,
          y: clientY - 100,
        });
      }}
    >
      <img
        style={{ left: coordinatesCS.x, top: coordinatesCS.y }}
        className='cursor'
        src={flower}
        alt=''
      />
      <img
        className='bf'
        style={{ left: coordinatesBF.x, top: coordinatesBF.y }}
        src={butterfly}
        alt=''
      />
    </div>
  );
}

export default App;
