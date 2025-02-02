import { useEffect, useState } from "react";
import { createStore } from "../store/create-store";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const { subscribe, setState } = createStore(0);

  const inc = () => {
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
    setState((prev) => prev + 1);
  };

  useEffect(() => {
    const unsubscribe = subscribe(setCount);
    return unsubscribe;
  }, [subscribe]);

  return (
    <div>
      {count} <button onClick={inc}>+1</button>
    </div>
  );
};
