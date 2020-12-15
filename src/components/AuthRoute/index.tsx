import React, { ComponentType } from 'react';
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from 'react-router-dom';

interface AuthRouteProps extends Omit<RouteProps, 'component'> {
  component: ComponentType<RouteComponentProps<any>> | ComponentType<any>;
  authed: boolean;
  redirectTo: string;
}

const AuthRoute: React.FC<AuthRouteProps> = ({
  component: Component,
  authed,
  redirectTo,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        authed ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: redirectTo,
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AuthRoute;
