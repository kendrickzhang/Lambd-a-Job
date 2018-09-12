import React from 'react';

function UserRegistrationForm(props) {
    function handleRegister(evt) {
        evt.preventDefault();
        props.registerUser();
    }

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
                <input
                    name="password"
                    id="password"
                    onChange={props.onChange}
                    value={props.value}
                    type="password"
                />
                <button onClick={(evt) => handleRegister(evt)}>Register</button>
            </form>
        </div>
    );
}

export default UserRegistrationForm;