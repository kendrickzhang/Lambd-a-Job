import React, { Component } from 'react';
import './App.css';

import {
  registerUser,
  userLogin,
  fetchAllStickyNotes,
  fetchOneStickyNote
}
from './services/api';

import UserRegistrationForm   from './components/UserRegistrationForm';
import UserLoginForm          from './components/UserLoginForm';
import ShowAllStickyNotes     from './components/ShowAllStickyNotes';
import ShowOneStickyNote      from './components/ShowOneStickyNote';
import CreateStickyNote       from './components/CreateStickyNote';
import EditStickyNote         from './components/EditStickyNote';
import DeleteStickyNote       from './components/DeleteStickyNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sticky_notes: [],
      email: '',
      password:'',
      isLoggedIn: null,
    }

    this.handleChange = this.handleChange.bind(this);
    this.getNotes = this.getNotes.bind(this);
    
    this.registerUser = this.registerUser.bind(this);
    this.login = this.login.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.logout = this.logout.bind(this);
  }



  getNotes() {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    fetch(`http://localhost:3000/sticky_notes`, init)
    .then(res => res.json())
    .then(data => this.setState({
      sticky_notes: data,
    }))
    .catch(err => err)
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

// isLoggedIn(), logout(), login() are supplied from https://git.generalassemb.ly/wdi-nyc-lambda/react-rails-token-auth
  isLoggedIn() {
    const res = !!(localStorage.getItem("jwt"));
    this.setState({
      isLoggedIn: res,
    })
    return res;
  }

  logout() {
    localStorage.removeItem("jwt")
    this.setState({
      sticky_notes: [],
      isLoggedIn: false,
    })
  }

  login() {
    const url = `http://localhost:3000/user_token`;
    const body = { "auth": { "email": this.state.email, "password": this.state.password } }
    const init = { 
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body:JSON.stringify(body),
    }

    fetch(url, init)
    .then(res => res.json())
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => this.setState({
      isLoggedIn: true,
    }))
    .then(() => this.getNotes())
    .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getNotes()
    this.isLoggedIn()
  }

  render() {
    const display = this.state.isLoggedIn ? this.state.sticky_notes.map((note) => {
          return <p key={note.id}> Company:{note.company}, Location:{note.location} </p>
        }) : "UNAUTHORIZED"

    return (
      <div className="App">
        <div>{ display }</div>
        <UserRegistrationForm
          onChange={this.handleChange}
          email={this.state.email}
          password={this.state.password}
          registerUser={this.registerUser}
        />
        <UserLoginForm
          onChange={this.handleChange}
          email={this.state.email}
          password={this.state.password}
          login={this.login}
          logout={this.logout}
        />
        <div>
          <ShowAllStickyNotes />
        </div>
        <div>
          <ShowOneStickyNote />
        </div>
        <CreateStickyNote
          onChange={this.handleChange}
        />
        <EditStickyNote
          onChange={this.handleChange}
        />
        <DeleteStickyNote
          onChange={this.handleChange}
        />

        <button onClick={this.getNotes}>Get Notes</button>
      </div>
    );
  }
}

export default App;
