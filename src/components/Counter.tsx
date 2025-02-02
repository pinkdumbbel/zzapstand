import { useStore } from "../hooks/useStore";
import { createStore } from "../store/create-store";

const counterStore = createStore(0);

export const Counter = () => {
  const [count, setCount] = useStore(counterStore);

  return (
    <div>
      {count} <button onClick={() => setCount((prev) => prev + 1)}>+1</button>
    </div>
  );
};
