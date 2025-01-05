import React from 'react';
import './App.css';
import useStopWatch from './stopwatch/stopwatch';

function App() {
  const { pauseOrPlay, pausedOrPlaying, reset, current, addLap, lap } = useStopWatch();

  return (
    <div className="App">
      {current}
      <br/>
      {lap}
      <button onClick={pauseOrPlay}>{pausedOrPlaying}</button>
      { pausedOrPlaying === "Play" && <button onClick={addLap}>Add lap</button>}
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
