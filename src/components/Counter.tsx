import { useEffect, useState } from "react";
import { count, increment, setStateFunctions } from "../store/custom-store";

export const Counter = () => {
  const [state, setState] = useState(count);

  const inc = () => {
    increment(2);
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
