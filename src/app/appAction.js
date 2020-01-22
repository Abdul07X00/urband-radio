import {navigate} from '../router/navigationService';

export const AppAction = {
  SETLOADING: 'SETLOADING',
};

export const onAppStart = () => {
  return async (dispatch, getState) => {
    navigate('HomeScreen');
  };
};
