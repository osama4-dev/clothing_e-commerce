import React from "react";

//as we are importing our action from user.actions googleSignInStart which is in redux file
//for action we need to dispatch actions which is mapDispatchToProps and inorder to get those actions
//from our redux we need to use "connect" from react_redux we destructured our googleSignInStart and replaced
//our signInWithGoogle which we were getting from firebase before with googleSignInStart

import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { googleSignInStart,emailSignInStart } from "../../redux/user/user.actions";

import "./sign-in.styles.scss";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  //this.setState({ email: "", password: "" }); is destructured as const {email,password} = this.state
  //we got emailSignInStart from user.actions.js file then we dispatch the action at the bottom 
  //and then we use that action here in out handle submit function which is emailSignInStart then we go to
  //our user.sagas.js file and import our emailSignInSuccess,emailSignInFailure and use them in user.saga.js file
  handleSubmit = async (event) => {
    event.preventDefault();
    const {emailSignInStart}=this.props
    const { email, password } = this.state;
    emailSignInStart(email,password)
    
  };

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { googleSignInStart } = this.props;
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            label="email"
            value={this.state.email}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="password"
            handleChange={this.handleChange}
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
}
const mapDispatchToProps = (dispatch) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart:(email,password) => dispatch(emailSignInStart({email,password}))
});

export default connect(null, mapDispatchToProps)(SignIn);
