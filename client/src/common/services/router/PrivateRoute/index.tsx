import React from 'react'
import {Redirect, Route, RouteProps} from 'react-router-dom';
import { useSession } from '../../context/SessionContext';

type RouteType = {
  component: React.ComponentType<RouteProps>,
  path: string,
  exact: boolean
}


const PrivateRoute: React.FC<RouteType> = ({ component: RouteComponent, ...rest }) => {

  const { user } = useSession();

  return (
    <Route
      {...rest}
      render={routeProps =>
        user ? (
          <RouteComponent {...routeProps}/>
        ) : (
          <Redirect to="/login"/>
        )
      }
    />
  )
};

export default PrivateRoute;