import React from 'react';
import UserRegistrationForm   from './UserRegistrationForm';
import UserLoginForm          from './UserLoginForm';

function LoginWindow(props) {
  // toggleLoginForm: false when Register button is clicked
  function showRegisterPane(evt) {
    evt.preventDefault();
    props.showRegisterForm();
  }

  // toggleLoginForm: true when Login button is clicked
  function showLoginPane(evt) {
    evt.preventDefault();
    props.showLoginForm();
  }

  // conditionally render Login or Register form components when toggleLoginForm changes state
  const loginOrRegister = props.toggleLoginForm
    ? <div>
        <UserRegistrationForm
          onChange={props.onChange}
          email={props.email}
          password={props.password}
          registerUser={props.registerUser}
          login={props.login}
        />
      </div>
    : <div>
        <UserLoginForm
          onChange={props.onChange}
          email={props.email}
          password={props.password}
          login={props.login}
          logout={props.logout}
        />
      </div>;

  return (
    <div>
      <button onClick={(evt) => showLoginPane(evt)}>Login</button>
      <button onClick={(evt) => showRegisterPane(evt)}>Register</button>
      <div>{ loginOrRegister }</div>
    </div>
  );
}

export default LoginWindow;