import React, { Component } from 'react';
import './App.css';
import UserRegistrationForm from './components/UserRegistrationForm';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sticky_notes: [],
      email: '',
      password:'',
      isLoggedIn: null,
    };
    this.getNotes = this.getNotes.bind(this)
    this.logout = this.logout.bind(this)
    this.login = this.login.bind(this)
    this.isLoggedIn = this.isLoggedIn.bind(this)
    this.handleChange = this.handleChange.bind(this)
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
    this.getNotes(),
    this.isLoggedIn()
  }

  render() {
    const display = this.state.isLoggedIn ? this.state.sticky_notes.map((note) => {
          return <p key={note.id}> Company:{note.company}, Location:{note.location} </p>
        }) : "UNAUTHORIZED"

    return (
      <div className="App">
        <h1>Hello Kendrick</h1>
        <form>
          <label htmlFor="email">Email: </label>
          <br />
          <input
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
            type="email"
          />
          <br /><br />
          <label htmlFor="password">Password:</label>
          <br />
          <input
            name="password"
            onChange={this.handleChange}
            value={this.state.value}
            type="password"
          />
          </form>
          <br />

          <button onClick={this.login}>
          Login
          </button>

          <button onClick={this.logout}>
          Logout
          </button>

          <button onClick={this.getNotes}>
          Get Notes
          </button>

          { display }

          <UserRegistrationForm />
      </div>
    );
  }
}

export default App;
