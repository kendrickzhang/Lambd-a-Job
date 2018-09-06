import React, { Component } from 'react';

class UserRegistrationForm extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
        }
    }
    render() {
        return(
            <div>This is Registration Form</div>
        );
    }
}

export default UserRegistrationForm;