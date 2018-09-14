import React from 'react';
import DeleteStickyNote from './DeleteStickyNote';

function EditStickyNote(props) {
    // set editButton state to false with showCreateForm() when Save Changes button is clicked
    // invokes editSticky() for PUT request with current_note props
    function handleEditNote() {
        // evt.preventDefault();
        props.showCreateForm();
        props.editSticky(props.current_note);
    }

    // invokes deleteSticky() when Delete button is clicked with current_note props
    function handleDeleteNote() {
        // evt.preventDefault();
        props.deleteSticky(props.current_note);
    }

    return (
        <form>
            <input
                type="text"
                placeholder="URL of Job Posting"
                name="jobListing_url"
                value={props.listingUrl}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Company Name"
                name="company"
                value={props.company}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Job Title"
                name="title"
                value={props.title}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Location"
                name="location"
                value={props.location}
                onChange={props.onChange}
            />
            <input
                type="text"
                placeholder="Application Status"
                name="app_status"
                value={props.appStatus}
                onChange={props.onChange}
            />
            <textarea
                placeholder="Notes"
                maxLength="420"
                name="notes"
                cols="20"
                rows="15"
                value={props.notes}
                onChange={props.onChange}
            />
            <button onClick={() => {handleEditNote()}}>Save Changes</button>
            <button onClick={() => {handleDeleteNote()}}>Delete Sticky Note</button>
        </form>
    );
}

export default EditStickyNote;