import React,{useState} from "react";

//as we are importing our action from user.actions googleSignInStart which is in redux file
//for action we need to dispatch actions which is mapDispatchToProps and inorder to get those actions
//from our redux we need to use "connect" from react_redux we destructured our googleSignInStart and replaced
//our signInWithGoogle which we were getting from firebase before with googleSignInStart

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

const SignIn =({emailSignInStart,googleSignInStart})=>{
  const[userCredentials,setCredentials]=useState({email:'',password:''})
  //before we were using class component so the detail bottom is written about that
  //this.setState({ email: "", password: "" }); is destructured as const {email,password} = this.state
  //we got emailSignInStart from user.actions.js file then we dispatch the action at the bottom 
  //and then we use that action here in out handle submit function which is emailSignInStart then we go to
  //our user.sagas.js file and import our emailSignInSuccess,emailSignInFailure and use them in user.saga.js file
  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email,password)
    
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    // this.setState({ [name]: value });
    setCredentials({...userCredentials, [name]: value });

  };

 
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={handleChange}
            label="email"
            value={email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={password}
            label="password"
            handleChange={handleChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign In
            </CustomButton>
            <CustomButton
              type="button"
              onClick={googleSignInStart}
              isGoogleSignIn
            >
              
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }

const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:(email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
