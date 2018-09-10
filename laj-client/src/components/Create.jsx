import React from 'react';

function CreateStickyNote(props) {
    function handleCreateNote(evt) {
        evt.preventDefault();
        props.createSticky();
    }

    return (
        <form>
            <input
                type="text"
                placeholder="URL of Job Posting"
                name="jobListing_url"
                value={props.sticky_notes.jobListing_url}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Company Name"
                name="company"
                value={props.sticky_notes.company}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Job Title"
                name="title"
                value={this.state.title}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Location"
                name="location"
                value={props.sticky_notes.location}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Application Status"
                name="app_status"
                value={props.sticky_notes.app_status}
                onChange={props.onChange}
            />
            <textarea
                placeholder="Notes"
                name="notes"
                cols="30"
                rows="10"
                value={props.sticky_notes.notes}
                onChange={props.onChange}
            />
            <button onClick={(evt) => handleCreateNote(evt)}>Add Sticky Note</button>
        </form>
    );
}

export default CreateStickyNote;