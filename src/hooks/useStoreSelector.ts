import { useEffect, useState } from "react";
import { Store } from "../store/createStore";

export const useStoreSelector = <T, S>(
  store: Store<T>,
  selector: (state: T) => S
) => {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() =>
      setState(selector(store.getState()))
    );
    setState(selector(store.getState()));
    return unsubscribe;
  }, [store, selector]);

  return state;
};
