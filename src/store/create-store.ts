interface Store<T> {
  getState: () => T;
  setState: (nextState: T) => void;
  subscribe: (listener: (state: T) => void) => () => void;
}

export const createStore = <T>(initialState: T): Store<T> => {
  let state = initialState;

  const listeners = new Set<(state: T) => void>();

  const getState = () => state;

  const setState = (nextState: T) => {
    state = nextState;
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener: (state: T) => void) => {
    listeners.add(listener);
    return () => listeners.delete(listener);
  };

  return { getState, setState, subscribe };
};
