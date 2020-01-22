import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import store from './store/store';
import AppRoute from './router/appRoute';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <AppRoute />
    </Provider>
  );
};

export default App;
