interface Store<T> {
  getState: () => T;
  setState: (nextState: T | ((prev: T) => T)) => void;
  subscribe: (listener: (state: T) => void) => () => void;
}

type SetState<T> = (state: T) => void;

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState;

  const listeners = new Set<SetState<T>>();

  const getState = () => state;

  const setState = (nextState: T | ((prev: T) => T)) => {
    state =
      typeof nextState === "function"
        ? (nextState as (prev: T) => T)(state)
        : state;
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener: SetState<T>) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};
