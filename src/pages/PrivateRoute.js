import React from 'react'
import { Route } from 'react-router'
import { Login } from './'
//import { Redirect } from 'react-router'
import { Navigate } from 'react-router'
import { useAuth0 } from '@auth0/auth0-react'

export const PrivateRoute = ({ children, ...rest }) => {
  const { loginWithRedirect, user, isAuthenticated } = useAuth0()
  const isUser = user && isAuthenticated
  return (
    <>
      {/* <Route */}
      {/* {...rest} */}
      {/* render={() => { */}
      {isUser ? children : <Login />}
      {/* }} */}
      {/* ></Route> */}
    </>
  )
}
//export default PrivateRoute
