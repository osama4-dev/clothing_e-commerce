//a reducer is a fucntion which gets two properties it gets a state object which represetns the last state or an initial state and then it recieves an action

//this initial state is what we have given in our app.js file the currentUser:null we will be giving that here

const INITIAL_STATE = {
  currentUser: null,
};

//if the state is ever undefined it will go to initial state
//action.type value which will be string
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                currentUser:action.payload
            }

        default:
            return state;
    }
};

export default userReducer

//we will now export our useReducer and import it in our root-reducer.js