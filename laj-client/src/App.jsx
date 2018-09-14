import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import './App.css';

import UserRegistrationForm   from './components/UserRegistrationForm';
import UserLoginForm          from './components/UserLoginForm';
import CreateStickyNote       from './components/CreateStickyNote';
import ShowAllStickyNotes     from './components/ShowAllStickyNotes';
import EditStickyNote         from './components/EditStickyNote';
import DeleteStickyNote       from './components/DeleteStickyNote';
import LoginWindow            from './components/LoginWindow';
import HpHeader               from './components/HpHeader';
import Dashboard              from './components/Dashboard';
// import LoginWindow            from './components/LoginWindow';

const BASE_URL = process.env.REACT_APP_BASE_URL;
// const BASE_URL = 'http://localhost:3000';

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
      current_note: '',
      edit_note: '',
      editButton: null,
      deleted: null,
      // StickyNote attributes:
      jobListing_url: '',
      company: '',
      title: '',
      location: '',
      app_status: '',
      notes: '',
      // View states:
      currentView: '',
      toggleLoginForm: null,
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
    this.getOneNote = this.getOneNote.bind(this);
    this.editSticky = this.editSticky.bind(this);
    this.deleteSticky = this.deleteSticky.bind(this);
    // Bind views:
    this.handleEditBtn = this.handleEditBtn.bind(this);
    this.showCreateForm = this.showCreateForm.bind(this);
    this.showLoginForm = this.showLoginForm.bind(this);
    this.showRegisterForm = this.showRegisterForm.bind(this);
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
    const url = `${BASE_URL}/users`;
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
  
  // login(), isLoggedIn(), logout() are supplied from:
  // https://git.generalassemb.ly/wdi-nyc-lambda/react-rails-token-auth
  login() {
    const url = `${BASE_URL}/user_token`;
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
    const url = `${BASE_URL}/sticky_notes`;
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

    fetch(`${BASE_URL}/sticky_notes`, init)
    .then(res => res.json())
    .then(data => this.setState({
      sticky_notes: data,
    }))
    .catch(err => err)
  }

  getOneNote(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `${BASE_URL}/sticky_notes/${id}`;
    const init = { 
      method: 'GET',
      headers: { "Authorization": `Bearer ${jwt}` },
      mode: 'cors',
    }

    fetch(url, init)
      .then(res => res.json())
      .then( note => this.setState({
        current_note: note,
      }))
      .catch(err => console.log(err));
  }

  editSticky(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `${BASE_URL}/sticky_notes/${id}`;
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
    const url = `${BASE_URL}/sticky_notes/${id}`;
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

  // toggleLoginForm: false => shows login form || true => shows register form
  showLoginForm() {
    this.setState({
      toggleLoginForm: false,
    })
  }
  // toggleLoginForm: false => shows register form
  showRegisterForm() {
    this.setState({
      toggleLoginForm: true,
    })
  }
  // editButton: true => when edit StickyNote button is clicked, current_note set to target note
  handleEditBtn(note) {
    this.setState({
      editButton: true,
      current_note: note,
    })
  }
  // always show create sticky form unless editButton state changes
  showCreateForm() {
    this.setState({
      editButton: false,
    })
  }

  render() {
    const checkLogin = this.state.isLoggedIn
    ? <div className="dashboard">
        <Dashboard
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
          handleEditBtn={this.handleEditBtn}
          showCreateForm={this.showCreateForm}
          deleteSticky={this.deleteSticky}
          getOneNote={this.getOneNote}
        />
      </div>
    : <div className="loginWindowContainer">
        <center>
        <LoginWindow
          onChange={this.handleChange}
          email={this.state.email}
          password={this.state.password}
          registerUser={this.registerUser}
          login={this.login}
          logout={this.logout}
          showLoginForm={this.showLoginForm}
          showRegisterForm={this.showRegisterForm}
          toggleLoginForm={this.state.toggleLoginForm}
        />
        </center>
      </div>;

    return (
      <div className="App">
        <div className="mainHeader">
          <HpHeader
            isLoggedIn={this.state.isLoggedIn}
            logout={this.logout}
          />
        </div>
        <div>{ checkLogin }</div>
        <footer>Created By Kendrick Zhang</footer>
      </div>
    );
  }
}

export default App;