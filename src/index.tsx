import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { AppInitializer } from "./logic/initializer/AppInitializer";
import { createStore} from 'redux';
import { rootReducer } from './store';

function saveToLocalStorage(state){
  try{
    const serializedState=JSON.stringify(state)
    sessionStorage.setItem('state',serializedState)
  }catch(e){
    console.log(e)
  }
}

function loadFromLocalStorage(){
  try{ const serializedState=sessionStorage.getItem('state')
   if(serializedState===null) return undefined
   return JSON.parse(serializedState)
   }catch(e){
     console.log(e)
     return undefined
   }

}
const persitedState=loadFromLocalStorage()

export const store =createStore(rootReducer,persitedState,
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

AppInitializer.inti();
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") || document.createElement("div") // fix for testing purposes
);

store.subscribe(()=>saveToLocalStorage(store.getState()))
serviceWorker.unregister();
