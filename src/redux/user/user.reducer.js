//"3rd STEP" AFTER MAKING ACTIONS IN user.actions.js file s

import UserActionTypes from "./user.types";

//a reducer is a fucntion which gets two properties it gets a state object which represetns the last state or an initial state and then it recieves an action

//this initial state is what we have given in our app.js file the currentUser:null we will be giving that here
//...................................................redux-1....................................

const INITIAL_STATE = {
  currentUser: null,
  error: null,
};

//if the state is ever undefined it will go to initial state
//action.type value which will be string
//    case "UserActionTypes.SET_CURRENT_USER:" we will change it to case "UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:"
//BEFORE WE HAD     case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS: AND  ase UserActionTypes.EMAIL_SIGN_IN_SUCCESS:
//WE REDUCED THEM TO SIMPLE SIGN_IN_SUCCESS BY SETTING THEM IN user.types.js file

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: action.payload,
        error: null,
      };
    //if the user is successfull make error null if the user has failed then show error with action.payload
    case UserActionTypes.SIGN_OUT_SUCCESS:
      return {
        ...state,
        currentUser: null,
        error: null,
      };
    case UserActionTypes.SIGN_IN_FAILURE:
    case UserActionTypes.SIGN_OUT_FAILURE:
    case UserActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

//we will now export our useReducer and import it in our root-reducer.js
