import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root-reducer";
// import thunk from 'redux-thunk' replacing thunk with saga
import createSagaMiddleware from "redux-saga";
import rootSaga from './root-saga'
//                                          PERSIST STEP 1 (persistStore)
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
//ptutting a condition when to show logger and when to not
//also which assets and then image named node-env setting
if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
export const persistor = persistStore(store);

//we are creating a new persisting version of our store using the persistor object we are doing this for LOCAL STORAGE
//for persist next we go to our root-reducer file
