import { combineReducers } from 'redux';
import {labelsReducer} from "./labels/reducer";
import {generalReducer} from "./general/reducer";
import {aiReducer} from "./ai/reducer";
import {newpassword} from "./login/reducers/ex";


export const rootReducer = combineReducers({
    general: generalReducer,
    labels: labelsReducer,
    ai: aiReducer,
    new:newpassword,
});

export type AppState = ReturnType<typeof rootReducer>;