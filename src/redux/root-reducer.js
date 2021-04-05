//root reducer is an object which represents all of the state of our application
//all of the reducers will be written here
//the combine reducer is then combining all the other reducers here

//............................................................redux-2.............................................
//persist is basically the lobrary from which the storage is being used
//For persist we will first wrap our store with persist
//                                             PERSIST STEP 2(persistReucer)and(persistConfig)
//we are whitelisting that is focusing only on cart so we send cart in our whitelist
import { combineReducers } from 'redux'

import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
    key:'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user:userReducer,
    cart:cartReducer
})

export default persistReducer(persistConfig,rootReducer);

//before we were exporting our combineReducers like this
// export default combineReducers({
//     user:userReducer,
//     cart:cartReducer
// })
//but now we will do it like this
// export default persistReducer(persistConfig,rootReducer);
//now we go to index.js file and add there
