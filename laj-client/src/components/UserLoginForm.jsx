import React from 'react';

function UserLoginForm(props) {
    return (
        <div>
            <form>
                <label htmlFor="email">Email:</label>
                <input
                    name="email"
                    id="email"
                    onChange={props.onChange}
                    value={props.email}
                    type="email"
                />
                <label htmlFor="password">Password:</label>
                <br />
                <input
                    name="password"
                    id="password"
                    onChange={props.onChange}
                    value={props.value}
                    type="password"
                />
                <button onClick={props.login}>Login</button>
                <button onClick={props.logout}>Logout</button>
            </form>
        </div>
    );
}
export default UserLoginForm;