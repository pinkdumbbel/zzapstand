import { useEffect, useState } from "react";

let count = 0;
const setStates = new Set<(count: number) => void>();

export const Counter = () => {
  const [state, setState] = useState(count);

  const inc = () => {
    count++;
    setStates.forEach((fn) => fn(count));
  };

  useEffect(() => {
    setStates.add(setState);
    return () => {
      setStates.delete(setState);
    };
  }, [setState]);

  return (
    <div>
      {state} <button onClick={inc}>+1</button>
    </div>
  );
};
