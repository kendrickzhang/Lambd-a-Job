import React from 'react';
import DeleteStickyNote from './DeleteStickyNote';

function EditStickyNote(props) {
    function handleEditNote(evt) {
        evt.preventDefault();
        props.showCreateForm();
        props.editSticky(props.current_note);
    }

    function handleDeleteNote(evt) {
        evt.preventDefault();
        props.deleteSticky();
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
                name="notes"
                cols="30"
                rows="10"
                value={props.notes}
                onChange={props.onChange}
            />
            <button onClick={(evt) => {handleEditNote(evt)}}>Save Changes</button>
            <button onClick={(evt) => {handleDeleteNote(evt)}}>Delete Sticky Note</button>
        </form>
    );
}

export default EditStickyNote;