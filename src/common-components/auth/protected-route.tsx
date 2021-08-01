import React from 'react'
import { Redirect, Route } from 'react-router-dom';

function checkJwtToken(): boolean {
  const token = localStorage.getItem("jwtToken")
  return token != null;
}

export default function ProtectedRoute({ children, ...rest } : any) {
    return (
      <Route
        {...rest}
        render={({ location }) =>
          checkJwtToken() ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }