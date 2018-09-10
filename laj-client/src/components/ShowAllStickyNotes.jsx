import React from 'react';
import CreateStickyNote from './CreateStickyNote';
import EditStickyNote from './EditStickyNote';

function ShowAllStickyNotes(props) {
    function handleSwitch(evt) {
        evt.preventDefault();
        props.switchForm();
    }
    const displayAll = props.isLoggedIn ? props.sticky_notes.map((stickyNote) => {
        return (
            <div key={stickyNote.id}>
                <p>Listing URL: {stickyNote.jobListing_url}</p>
                <p>Company: {stickyNote.company}</p>
                <p>Title: {stickyNote.title}</p>
                <p>Location: {stickyNote.location}</p>
                <p>Application Status: {stickyNote.app_status}</p>
                <p>Notes: {stickyNote.notes}</p>
                <button onClick={(evt) => handleSwitch(evt)}>Edit Sticky</button>

            </div>
        )
    }) : "UNAUTHORIZED";
    
    return (
        <div>
            <div>{ displayAll }</div>
            { props.editButton ? <CreateStickyNote /> : <EditStickyNote /> }
        </div>
    );
}

export default ShowAllStickyNotes;