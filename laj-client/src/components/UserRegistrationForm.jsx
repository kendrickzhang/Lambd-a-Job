import React, { Component } from 'react';

class UserRegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.registerUser = this.registerUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        })
    }

    registerUser() {
        const url = `http://localhost:3000/users`;
        const body = {
            "user": {
                "email": this.state.email,
                "password": this.state.password
            }
        }
        const init = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            mode: 'cors',
            body:JSON.stringify(body),
        }

        fetch(url, init)
            .then(res => res.json())
            .then(alert(`Welcome ${this.state.email}`))
            .catch(err => console.log(err));
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.registerUser();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <button>Register</button>
            </form>
        );
    }
}

export default UserRegistrationForm;