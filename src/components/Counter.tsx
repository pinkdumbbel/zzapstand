import { useEffect, useState } from "react";
import { count, increment, setStateFunctions } from "../store/custom-store";

export const Counter = () => {
  const [state, setState] = useState(count);

  const inc = () => {
    const count = increment(2);
    setStateFunctions.forEach((fn) => fn(count));
  };

  useEffect(() => {
    setStateFunctions.add(setState);
    return () => {
      setStateFunctions.delete(setState);
    };
  }, [setState]);

  return (
    <div>
      {state} <button onClick={inc}>+1</button>
    </div>
  );
};
