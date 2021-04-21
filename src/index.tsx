import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import { AppInitializer } from "./logic/initializer/AppInitializer";
import { createStore} from 'redux';
import  rootReducer  from './store';
import  {persistStore } from "redux-persist";
import {PersistGate} from 'redux-persist/es/integration/react';



export const store =createStore(rootReducer,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

export const persistor = persistStore(store)

AppInitializer.inti();
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}> <App /> </PersistGate>
  </Provider>,
  document.getElementById("root") || document.createElement("div") // fix for testing purposes
);

serviceWorker.unregister();
