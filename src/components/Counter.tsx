import { useStoreSelector } from "../hooks/useStoreSelector";
import { createStore } from "../store/create-store";

const counterStore = createStore({ counter1: 0, counter2: 0 });

export const Counter1 = () => {
  const count1 = useStoreSelector(counterStore, (state) => state.counter1);

  const inc = () => {
    counterStore.setState((prev) => ({
      ...prev,
      counter1: prev.counter1 + 1,
    }));
  };

  return (
    <div>
      {count1} <button onClick={inc}>+1</button>
    </div>
  );
};

export const Counter2 = () => {
  const count2 = useStoreSelector(counterStore, (state) => state.counter2);
  const inc = () => {
    counterStore.setState((prev) => ({
      ...prev,
      counter2: prev.counter2 + 1,
    }));
  };

  return (
    <div>
      {count2} <button onClick={inc}>+1</button>
    </div>
  );
};
