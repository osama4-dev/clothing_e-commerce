import SHOP_DATA from './shop.data'
//USING SHOP_DATA in our initial state which is coming from shop.data file
const INITIAL_STATE = {
    collections:SHOP_DATA
}
const shopReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default shopReducer