import React from 'react';

function UserLoginForm(props) {
    function handleLogin(evt) {
        evt.preventDefault();
        props.login();
    }

    // function handleLogout(evt) {
    //     evt.preventDefault();
    //     props.logout();
    // }

    return (
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
            <input
                name="password"
                id="password"
                onChange={props.onChange}
                value={props.value}
                type="password"
            />
            <button onClick={(evt) => handleLogin(evt)}>Login</button>
            {/* <button onClick={(evt) => handleLogout(evt)}>Logout</button> */}
        </form>
    );
}

export default UserLoginForm;