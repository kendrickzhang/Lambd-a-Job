const BASE_URL = process.env.REACT_APP_BASE_URL;
const BASE_URL_USERS = process.env.REACT_APP_USERS;
const BASE_URL_USER_TOKEN = process.env.REACT_APP_USER_TOKEN;
const BASE_URL_STICKY_NOTES = process.env.REACT_APP_STICKY_NOTES;

// User Auth functions:
export function registerUser() {
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

    fetch(BASE_URL_USERS, init)
        .then(res => res.json())
        .catch((err) => { throw err });
}

export function userLogin() {
    const url = `http://localhost:3000/user_token`;
    const body = { "auth": { "email": this.state.email, "password": this.state.password } }
    const init = { 
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
      mode: 'cors',
      body:JSON.stringify(body),
    }

    fetch(BASE_URL_USER_TOKEN, init)
    .then(res => res.json())
    .catch((err) => { throw err })
}

// fetch StickyNotes functions:,
export function fetchAllStickyNotes() {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      headers: { "Authorization": `Bearer ${jwt}` }
    }

    fetch(BASE_URL_STICKY_NOTES, init)
    .then(res => res.json())
    .catch((err) => { throw err });
}

export function fetchOneStickyNote(id) {
    const jwt = localStorage.getItem("jwt")
    const init = { 
      headers: {"Authorization": `Bearer ${jwt}`}
    }
    
    fetch(`${BASE_URL_STICKY_NOTES}/${id}`, init)
    .then(res => res.json())
    .catch((err) => { throw err });
}