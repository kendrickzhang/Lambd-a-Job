import React, { Component } from 'react';

class CreateStickyNote extends Component {
    constructor() {
        super();
        this.state = {
            jobListing_url: '',
            company: '',
            title: '',
            location: '',
            app_status: '',
            notes: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createStickyNote = this.createStickyNote.bind(this);
        this.getOneNote = this.getOneNote.bind(this);
    }

    handleChange(evt) {
        this.setState({
            [evt.target.name]: evt.target.value
        });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.createStickyNote();
    }

    createStickyNote() {
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

    getOneNote(id) {
        const jwt = localStorage.getItem("jwt")
        const url = `http://localhost:3000/sticky_notes/${id}`;

        const init = { 
            method: 'GET',
            headers: {"Authorization": `Bearer ${jwt}`},
            mode: 'cors',
        }

        fetch(url, init)
            .then(res => res.json())
            .catch(err => console.log(err));
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder="URL of Job Posting"
                    name="jobListing_url"
                    value={this.state.jobListing_url}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Company Name"
                    name="company"
                    value={this.state.company}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Job Title"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Location"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    placeholder="Application Status"
                    name="app_status"
                    value={this.state.app_status}
                    onChange={this.handleChange}
                />
                <textarea
                    placeholder="Notes"
                    name="notes"
                    cols="30"
                    rows="10"
                    value={this.state.notes}
                    onChange={this.handleChange}
                />
                <button>Add Sticky Note</button>
            </form>
        );
    }
}

export default CreateStickyNote;