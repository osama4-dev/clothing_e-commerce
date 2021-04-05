import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/integration/react'
import {store,persistor} from './redux/store'

import App from './App';
//we use PersistGate for persist now
//after passing the app component in PersistGate component we will now be able to save our items in cart even
//after the page is refreshed or closed and reopened as the action type now in our redux logger is type:Persist
ReactDOM.render(
  <Provider store={store}>
  
  <BrowserRouter>
  <PersistGate persistor={persistor}>
  <App />
  </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

