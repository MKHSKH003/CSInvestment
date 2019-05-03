
import React from 'react';
import { Provider } from 'react-redux';
import {AppRegistry,Text} from 'react-native';
import { Toast } from 'react-native-redux-toast';

import App from './src/root/routes';
import configureStore from './src/shared/store';

const store = configureStore();

const  RNRedux = () => (
   <Provider store={store}>
     <Toast messageStyle={{ color: 'white' }} />
     <App />
   </Provider>
)

export default RNRedux;
