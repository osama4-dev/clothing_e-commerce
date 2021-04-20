import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/user.selectors";


const PublicRoute = ({component: Component, restricted, currentUser,...rest}) => {

return(
    <Route {...rest} render={props => (
        currentUser && restricted ?
            <Redirect to="/" />
        : <Component {...props} />
    )} />
)


}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
  });

export default connect(mapStateToProps)(PublicRoute)