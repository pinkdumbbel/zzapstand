import { useEffect, useState } from "react";
import { Store } from "../store/create-store";

export const useStoreSelector = <T, S>(
  store: Store<T>,
  selector: (state: T) => S
) => {
  const [state, setState] = useState(() => selector(store.getState()));

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(selector(store.getState()));
    });
    return unsubscribe;
  }, [selector, store]);

  return state;
};
