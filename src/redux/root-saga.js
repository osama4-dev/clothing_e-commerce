import { all, call } from "redux-saga/effects";
//we made root saga same as root reducer we do it because we dont have to run individually on every saga file
//sagaMiddleware.run(fetchCollectionsStart) this which we were using in store.js now we will call this root saga file in store.js instead of sagaMiddleware.run in store file so we will call our all saga file here
//and make them = to this
import { shopSagas } from "./shop/shop.sagas";
import {userSaga} from './user/user.sagas'

import {cartSagas} from './cart/cart.sagas'

export default function* rootSaga() {
  yield all([call(shopSagas),call(userSaga),call(cartSagas)]);
}
