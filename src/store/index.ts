import { combineReducers } from 'redux';
import {labelsReducer} from "./labels/reducer";
import {generalReducer} from "./general/reducer";
import {aiReducer} from "./ai/reducer";
import {newpassword} from "./login/reducers/ex";
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const persistConfig={
    key:"root",
    storage,
    whitelist:['new']
}
const rootReducer=combineReducers({
    general: generalReducer,
    labels: labelsReducer,
    ai: aiReducer,
    new:newpassword,
})

export default persistReducer(persistConfig,rootReducer)
export type AppState = ReturnType<typeof rootReducer>;