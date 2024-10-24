import React, { useState, useEffect } from 'react';

function App() {
  const [timeElapsed, setTimeElapsed] = useState(0); // Initialize with 0 seconds
  const [isRunning, setIsRunning] = useState(false); // Control whether the timer is running

  // Handle timer logic
  useEffect(() => {
    let timerId;
    if (isRunning) {
      timerId = setInterval(() => {
        setTimeElapsed((prevTime) => prevTime + 1);
      }, 1000); // Increment time every second
    }

    return () => clearInterval(timerId); // Cleanup interval when unmounted or paused
  }, [isRunning]);

  // Start the timer
  const handleStart = () => {
    setIsRunning(true);
  };

  // Pause the timer
  const handlePause = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const handleReset = () => {
    setIsRunning(false);
    setTimeElapsed(0); // Reset to 0 seconds
  };

  return (
    <div className="App">
      <h1>React Timer</h1>
      <h2>{timeElapsed}s</h2> {/* Display elapsed time */}
      <div className="buttons">
        <button onClick={handleStart} disabled={isRunning}>Start</button>
        <button onClick={handlePause} disabled={!isRunning}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
