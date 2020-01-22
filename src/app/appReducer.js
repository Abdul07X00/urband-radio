import {AppAction} from './appAction';
const initialState = {
  loading: false,
};
export const appReducer = (state, action) => {
  switch (action.type) {
    case AppAction.SETLOADING:
      return {
        loading: action.value,
      };
    default:
      return {
        ...initialState,
      };
  }
};
