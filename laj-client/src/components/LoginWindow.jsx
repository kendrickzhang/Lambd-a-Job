import React from 'react';
import UserRegistrationForm   from './components/UserRegistrationForm';
import UserLoginForm          from './components/UserLoginForm';

function LoginWindow(props) {
    toggleRegister(evt) {
        evt.preventDefault();
    }
    return (
        <div>
          <UserRegistrationForm
            onChange={this.handleChange}
            email={this.state.email}
            password={this.state.password}
            registerUser={this.registerUser}
            login={this.login}
          />
        </div>
        <div>
          <UserLoginForm
            onChange={this.handleChange}
            email={this.state.email}
            password={this.state.password}
            login={this.login}
            logout={this.logout}
          />
        </div>
    );
}

export default LoginWindow;