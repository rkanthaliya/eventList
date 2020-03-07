import React, { createContext, useReducer } from 'react';
import { updateLoadingState, updateEventList } from './actions';

const initialState: any = {
  loading: true,
  eventList: null,
};

function reducer(state: any, action: any, callback = null) {
  console.log('prevState: ', state);
  console.log('action: ', action);
  switch (action.type) {
    case 'UPDATE_LOADING_STATE':
      return updateLoadingState(state, action.value);
    case 'UPDATE_EVENT_LIST':
      return updateEventList(state, action.value);
    default:
      return state;
  }
}

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };
