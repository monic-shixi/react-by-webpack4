import {Route, Redirect} from 'react-router-dom'
import React, {useState} from 'react'

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    loggedIn() ? (
      <Component {...props}/>
    ) : (
      <DelayRedirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} delay={2000} />
    )
  )}/>
)

export default PrivateRoute

function DelayRedirect(props) {
  const [timeoutable, setTimeoutable] = useState(props.delay)
  if (timeoutable) {
    setTimeout(function () {
      setTimeoutable(false)
    }, props.delay)
  }

  const showContent = timeoutable ? null : < Redirect {...props} />

  return showContent
}

const loggedIn = () => {
  let authId = localStorage.getItem("authId");
  return Boolean(authId)
}
