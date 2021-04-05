import {createStore,applyMiddleware} from 'redux'
import logger from 'redux-logger'
import { persistStore } from 'redux-persist'
import rootReducer from './root-reducer'
//                                          PERSIST STEP 1 (persistStore)
const middlewares = [logger];

 export const store = createStore(rootReducer,applyMiddleware(...middlewares))

 export const persistor = persistStore(store);



//we are creating a new persisting version of our store using the persistor object we are doing this for LOCAL STORAGE
//for persist next we go to our root-reducer file
