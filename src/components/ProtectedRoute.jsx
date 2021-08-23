import { Redirect, Route } from 'react-router-dom';
import { IsLoginContext } from '../contexts/IsLoginContext';
import React from 'react';



function ProtectedRoute(props) {

  const isLogin = React.useContext(IsLoginContext);

  if (!isLogin) {
    return <Redirect to='/sign-in'></Redirect>
  }

  return (
    <Route path={props.path}>
      {props.commponent}
    </Route>
  );
}

export default ProtectedRoute;