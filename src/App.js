import MainNavigator from './navigation/index';
import {Provider} from 'react-redux';
import React from 'react';
import {init} from './db';
import store from './store';

init()
  .then(() => {
    console.log('DB initialized');
  })
  .catch(error => {
    console.log('DB initialization failed', error);
  });

const App = () => {
  return (
    <Provider store={store}>
      <MainNavigator />
    </Provider>
  );
};

export default App;
