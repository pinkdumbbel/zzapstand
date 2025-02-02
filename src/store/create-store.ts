export interface Store<T> {
  getState: () => T;
  setState: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (listener: () => void) => () => void;
}

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState;

  const listeners = new Set<() => void>();

  const getState = () => state;

  const setState = (nextState: T | ((prev: T) => T)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : state;
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener: () => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};
