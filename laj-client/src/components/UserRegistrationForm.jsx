import React from 'react';

function UserRegistrationForm(props) {
    function handleSubmit(evt) {
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
                    onChange={props.onChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={props.password}
                    onChange={props.onChange}
                />
                <button>Register</button>
            </form>
        </div>
    );
}

export default UserRegistrationForm;