// "3RD STEP " we are making all of this saga for clear icon on the header we mmake a clearCartOnSignOut
//which will tell to clear the cart when sign out and then we pass that clearCartOnSignOut function in our
// onSignOutSuccess function and at the end end making a function cartSagas so that we can call it in 
// our root-saga.js file and we all also make changed in our cart.reducer.js file


import {all,call,takeLatest,put} from 'redux-saga/effects'

import UserActionTypes from '../user/user.types'
import {clearCart} from './cart.actions'


export function* clearCartOnSignOut(){
    yield put(clearCart())
}

export function* onSignOutSuccess(){
    yield takeLatest(UserActionTypes.SIGN_OUT_SUCCESS,clearCartOnSignOut)
}

export function* cartSagas(){
    yield all([call(onSignOutSuccess)])
}