import React, { Component } from 'react';
import './App.css';

import UserRegistrationForm   from './components/UserRegistrationForm';
import UserLoginForm          from './components/UserLoginForm';
import CreateStickyNote       from './components/CreateStickyNote';
import ShowAllStickyNotes     from './components/ShowAllStickyNotes';
import EditStickyNote         from './components/EditStickyNote';
import DeleteStickyNote       from './components/DeleteStickyNote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // Auth states:
      email: '',
      password:'',
      isLoggedIn: null,
      // StickyNote CRUD states:
      create_note: '',
      sticky_notes: [],
      current_note: {},
      edit_note: '',
      editButton: null,
      // StickyNote attributes:
      "jobListing_url": '',
      "company": '',
      "title": '',
      "location": '',
      "app_status": '',
      "notes": '',
      // View states:
      currentView: '',
    }

    this.handleChange = this.handleChange.bind(this);
    // Bind auth functions
    this.registerUser = this.registerUser.bind(this);
    this.login = this.login.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.logout = this.logout.bind(this);
    // Bind StickyNotes functions
    this.createSticky = this.createSticky.bind(this);
    this.getNotes = this.getNotes.bind(this);
    // Bind views:
    this.switchForm = this.switchForm.bind(this);
  }

  componentDidMount() {
    this.isLoggedIn()
    this.getNotes()
  }

  // handleChange supplied from: https://git.generalassemb.ly/wdi-nyc-lambda/react-rails-token-auth
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
      .then(() => this.login())
      .catch(err => console.log(err));
  }
  
  // isLoggedIn(), logout(), login() are supplied from: https://git.generalassemb.ly/wdi-nyc-lambda/react-rails-token-auth
  login() {
    const url = `http://localhost:3000/user_token`;
    const body = {
      "auth": {
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
    .then(res => localStorage.setItem("jwt", res.jwt))
    .then(() => this.setState({
      isLoggedIn: true,
    }))
    .then(() => this.getNotes())
    .catch(err => console.log(err))
  }
  
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

  // CRUD functions for StickyNotes:
  createSticky() {
    const jwt = localStorage.getItem("jwt")
    const url = `http://localhost:3000/sticky_notes`;
    const body = {
      "sticky_note": {
        "jobListing_url": this.state.jobListing_url,
        "company": this.state.company,
        "title": this.state.title,
        "location": this.state.location,
        "app_status": this.state.app_status,
        "notes": this.state.notes
      }
    }
    const init = { 
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body:JSON.stringify(body),
    }

    fetch(url, init)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  getNotes() {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      headers: { "Authorization": `Bearer ${jwt}` }
    }

    fetch(`http://localhost:3000/sticky_notes`, init)
    .then(res => res.json())
    .then(data => this.setState({
      sticky_notes: data,
    }))
    .catch(err => err)
  }

  getOneNote(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `http://localhost:3000/sticky_notes/${id}`;
    const init = { 
      method: 'GET',
      headers: { "Authorization": `Bearer ${jwt}` },
      mode: 'cors',
    }

    fetch(url, init)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  editSticky(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `http://localhost:3000/sticky_notes/${id}`;
    const body = {
      "sticky_note": {
        "jobListing_url": this.state.jobListing_url,
        "company": this.state.company,
        "title": this.state.title,
        "location": this.state.location,
        "app_status": this.state.app_status,
        "notes": this.state.notes
      }
    }
    const init = { 
      method: 'PUT',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body:JSON.stringify(body),
    }

    fetch(url, init)
      .then(res => res.json())
      .catch(err => console.log(err));
  }

  deleteSticky(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `http://localhost:3000/sticky_notes/${id}`;
    const init = {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${jwt}`,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
    }

    fetch(url, init)
      .then(() => {
        alert('Your Sticky Note Has Been Removed.')
      })
      .catch(err => console.log(err));
  }

  // Conditionally rendering forms:
  switchForm() {
    this.setState({
      editButton: true,
    })
  }

  render() {
    return (
      <div className="App">
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
        <div>
          <ShowAllStickyNotes
            isLoggedIn={this.state.isLoggedIn}
            sticky_notes={this.state.sticky_notes}
            current_note={this.state.current_note}
            onChange={this.handleChange}
            createSticky={this.createSticky}
            editSticky={this.editSticky}
            listingUrl={this.state.jobListing_url}
            company={this.state.company}
            title={this.state.title}
            location={this.state.location}
            appStatus={this.state.app_status}
            notes={this.state.notes}
            editButton={this.state.editButton}
            switchForm={this.switchForm}
          />
        </div>
      </div>
    );
  }
}

export default App;