import React from 'react';

function UserRegistrationForm(props) {
    handleSubmit(evt) {
        evt.preventDefault();
        props.registerUser();
    }

    return (
        <div>
            <form onSubmit={ () => { handleSubmit() } }>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={props.email}
                    onChange={props.handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={props.password}
                    onChange={props.handleChange}
                />
                <button>Register</button>
            </form>
        </div>
    );
}

export default UserRegistrationForm;