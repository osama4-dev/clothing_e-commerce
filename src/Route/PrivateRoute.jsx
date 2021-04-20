import React from 'react'
import { connect } from 'react-redux';

import {Route,Redirect} from 'react-router-dom'

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";



const PrivateRoute=({component: Component, currentUser,...rest})=>{
    return(
        <Route {...rest} render={props => (
            currentUser ?
                <Component {...props} />
            : <Redirect to="/signin" />
        )} />
)
}









const mapStateToProps = createStructuredSelector({
    
    currentUser: selectCurrentUser,
  });

  export default connect(mapStateToProps)(PrivateRoute)