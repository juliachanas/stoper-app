import React, { useState, useEffect } from 'react';
import Container from './components/Container/Container.js';
import FormattedTime from './components/FormattedTime/FormattedTime.js';
import Button from './components/Button/Button.js';

const App = () => {
  const [actualValue, setActualValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const handleStart = () => {
    if (!intervalId) {
      //sprawdzam czy intervalId jest równy null, jeśli tak to znaczy że jest nieaktywny -- stoper nie działa
      const id = setInterval(() => {
        //tworzę itervval - uruchamia stoper
        setActualValue((prevValue) => prevValue + 1);
      }, 1);
      setIntervalId(id);
    }
  };

  const handleStop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleReset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    setActualValue(0);
  };

  useEffect(() => {
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  return (
    <Container>
      <FormattedTime time={actualValue} />
      <Button onClick={handleStart}>START</Button>
      <Button onClick={handleStop}>STOP</Button>
      <Button onClick={handleReset}>RESET</Button>
    </Container>
  );
};

export default App;
