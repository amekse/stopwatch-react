import React from 'react';
import './App.css';
import useStopWatch from './stopwatch/stopwatch';

function App() {
  const { pauseOrPlay, pausedOrPlaying, reset, current } = useStopWatch();

  return (
    <div className="App">
      {current}
      <button onClick={pauseOrPlay}>{pausedOrPlaying}</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
