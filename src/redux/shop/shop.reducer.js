import ShopActionTypes from './shop.types'
//USING SHOP_DATA in our initial state which is coming from shop.data file
// REDUX THUNK STEP 2 CREATING isFetching and errorMessage in initial state as well making new  FETCH_COLLECTION cases
const INITIAL_STATE = {
    collections:null,
    isFetching:false,
    errorMessage:undefined
}
const shopReducer =(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.FETCH_COLLECTIONS_START:
            return{
                ...state,
                isFetching:true
            }
            case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:
        return{
            ...state,
            isFetching:false,
            collections:action.payload

        }
  case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:
      return{
          ...state,
          isFetching:false,
          errorMessage:action.payload
      }
        default:
            return state;
    }
}
export default shopReducer