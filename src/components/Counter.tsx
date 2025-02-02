import { createStore } from "../store/createStore";
import { useStore } from "../hooks/useStore";
import { useStoreSelector } from "../hooks/useStoreSelector";

const counterStore = createStore({ counter1: 0, counter2: 0 });

export const Counter1 = () => {
  const [count, setCount] = useStore(counterStore);

  const inc = () => {
    setCount((prev) => ({ ...prev, counter1: prev.counter1 + 1 }));
  };

  return (
    <div>
      {count.counter1} <button onClick={inc}>+1</button>
    </div>
  );
};

export const Counter2 = () => {
  const counter1 = useStoreSelector(counterStore, (state) => state.counter1);

  return (
    <div>
      {counter1} <button>+1</button>
    </div>
  );
};
