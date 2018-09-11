import React from 'react';
import UserRegistrationForm   from './UserRegistrationForm';
import UserLoginForm          from './UserLoginForm';

function LoginWindow(props) {
    return (
      <div>
        <div>
          <UserLoginForm
            onChange={props.onChange}
            email={props.email}
            password={props.password}
            login={props.login}
            logout={props.logout}
          />
        </div>
        <div>
          <UserRegistrationForm
            onChange={props.onChange}
            email={props.email}
            password={props.password}
            registerUser={props.registerUser}
            login={props.login}
          />
        </div>
      </div>
    );
}

export default LoginWindow;