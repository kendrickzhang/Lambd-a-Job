import React from 'react';
import 'bulma/css/bulma.css';
import '../App.css';

import CreateStickyNote     from './CreateStickyNote';
import EditStickyNote       from './EditStickyNote';

function ShowAllStickyNotes(props) {
    // editButton state is true when Edit Sticky button is clicked, targets specific StickNote id
    function showEdit(evt, id) {
        evt.preventDefault();
        props.handleEditBtn(id);
    }

    // conditionally render showAll StickyNotes when user is authenticated with token
    const displayAll = props.isLoggedIn 
        ? props.sticky_notes.map((stickyNote) => {
                return (
                    <div className="eachStickyNote" key={stickyNote.id}>
                        <p>Listing URL: {stickyNote.jobListing_url}</p>
                        <p>Company: {stickyNote.company}</p>
                        <p>Title: {stickyNote.title}</p>
                        <p>Location: {stickyNote.location}</p>
                        <p>Application Status: {stickyNote.app_status}</p>
                        <p>Notes: {stickyNote.notes}</p>
                        <button onClick={(evt) => showEdit(evt, stickyNote.id)}>Edit Sticky</button>
                    </div>
                )
            })
        : "UNAUTHORIZED";
    
    return (
        <div className="showAllContainer">
            <div className="displayAllRender">
                { displayAll }
            </div>
            <div className="crudFormContainer">
            {
                props.editButton
                ?
                <div className="createEditContainer">
                    <EditStickyNote
                        onChange={props.onChange}
                        current_note={props.current_note}
                        editButton={props.editButton}
                        showCreateForm={props.showCreateForm}
                        listingUrl={props.listingUrl}
                        company={props.company}
                        title={props.title}
                        location={props.location}
                        appStatus={props.appStatus}
                        notes={props.notes}
                        deleteSticky={props.deleteSticky}
                        editSticky={props.editSticky}
                    />
                </div>
                :
                <div className="createEditContainer">
                    <CreateStickyNote
                        onChange={props.onChange}
                        createSticky={props.createSticky}
                        listingUrl={props.listingUrl}
                        company={props.company}
                        title={props.title}
                        location={props.location}
                        appStatus={props.appStatus}
                        notes={props.notes}
                    />
                </div>
            }
            </div>
        </div>
    );
}

export default ShowAllStickyNotes;