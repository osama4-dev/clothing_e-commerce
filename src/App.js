import React from "react";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import HomePage from "../src/pages/homepage/homepage.component.jsx";
import ShopPage from "./pages/shop/shop.component.jsx";
import CheckoutPage from './pages/checkout/checkout.component'
import Header from "./components/header/header.component.jsx";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'

// exact in  Route component means it should  be / only to route it to that page or else it wont
//for example if its localhost:3000/hats tahat is localhost:3000/ is there to Homepage will be shown as its true exact is either true or false which is boolean so giving no value
//also means its true without exact the route pages will be shown on one page

//what switch does basically is it will go through the first route if there is no exact it will only route or show the first component OF Route
//in not using exact before using switch both Route components were shown on the same page but switch will make now only the first route compoennt to be shown if no exact used
//even if we give '/hats' it will show only '/' page

//Header or navbar should always be out of switch

class App extends React.Component {
  unsubscribeFromAuth = null;

  //user in parameters is the state of auth in firebase project
  //so we set our user in didMount fucntion which is a one time call function runs after render we are setting a current user with value user from auth of firebase
  // this.props.setCurrentUser destructured = this.props now we can simple use setCurrentUser
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        //we check if they are signin in so if there is we will get back the userRef from our createUserProfileDocument method
        //from the userAuth object being passed in if there is a document there we get the userRef which is line 44 and go on to
        //line 46, if there is no new document we will create a new document and objet which is in firebase.util.js file line no.42 with try and catch
        //and then we will get back the userRef and then we will subscribe that is we are gonna listen(onSnapShot) to the userRef
        //and we will also get the first state of that data which is snapShot=>{this.setState({cuuretnUser:{id:etc}})}
        //and so if the user ever logs out we will setState({currentUser:userAuth}) which is to null

        //onSnapShot is similar to onAuthStateChanged method
        //now we are using this.props.setCurrentUser from mapDispatchToProps
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }

      //setting user to null as userAuth = null making him sign out getting this auth from library
      setCurrentUser(userAuth);
    });
  }
  // console.log(user)
  //ComponetDidMount is opening the subscription and componentWillMount is closing that subscription
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  //we are setting current user in our header for the sign out

  //we have used mapStateToProps here the currentUser we are getting from store then simply using javascript and redirect to give condition
  //that if the user is logged in redirect him to home page or redirect him to signin and sign up page
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage}/>
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? (
                <Redirect to="/" />
              ) : (
                <SignInAndSignUpPage />
              )
            }
          />
        </Switch>
      </div>
    );
  }
}
//mapDispatchToProps is for letting us use the action which is from user.action.js file
//dispatching setCurrentUser with user in parameter as the payload as done in user.action.js file
//and now we dont need this constructor() {
//   super();
//   this.state = {
//     currentUser: null,
//   };
// } anymore

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});



const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

//null for the first one as we dont need any mapStateToProps
export default connect(mapStateToProps, mapDispatchToProps)(App);

//A current user in our application shouldnt be able to access our sign in route and then we need two things Redirect and currentUser from redux state

//Difference between session and local storage
//Session Storage:till we have access of page even if we refresh we would still have our items saved on it that is
//it will show us the data like the items in cart will be shown even after refreshed(before it was not being shown on refreshed)
//but if we close the page then we will loose all the data that is loosing all the items that are present
//in the cart.

//Local Storage:While local storage is a storage which will save your data or items in te cart over here
//even if we close the page or windows the data still remains at its place.
//In Local Storage we have setItem and and getItem, the setItem will set the item in localStorage and then 
//the getItem lets us pull it out of localStorage and we store then in string keys and we can only store them 
//in strings
//We use json.stringify to wrap our object inside of a string 

//Done in windows log panel for LOCAL STORAGE

// window.localStorage.setItem('myItem',JSON.stringify(myObj))
// undefined
// window.localStorage.getItem('myItem')
// "{"name":"osama"}"
// //this was getting the string now if we want to get our object back we will
// undefined
// const myRetrieveObh = window.localStorage.getItem('myItem')
// undefined
// JSON.parse(myRetrieveObh)
// {name: "osama"}
// AND Now we can call it simply in string using
// myRetrieveObh
// "{"name":"osama"}"