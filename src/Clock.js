import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState();

  useEffect(() => {
    setDate(new Date());
  }, [new Date()]);

  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {date?.toLocaleTimeString()}.</h2>
    </div>
  );
}

export default Clock;
