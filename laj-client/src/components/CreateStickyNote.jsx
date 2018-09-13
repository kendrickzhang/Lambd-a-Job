import React from 'react';

function CreateStickyNote(props) {
    // invokes createSticky() when Add Sticky Note button is clicked
    function handleCreateNote(evt) {
        evt.preventDefault();
        props.createSticky();
    }

    return (
        <form className="createForm">
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
            <button onClick={(evt) => handleCreateNote(evt)}>Add Sticky Note</button>
        </form>
    );
}

export default CreateStickyNote;