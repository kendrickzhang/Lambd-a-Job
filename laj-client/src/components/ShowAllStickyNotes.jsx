import React from 'react';
import CreateStickyNote from './CreateStickyNote';
import EditStickyNote from './EditStickyNote';

function ShowAllStickyNotes(props) {
    function showEdit(evt) {
        evt.preventDefault();
        props.handleEditBtn();
    }
    const displayAll = props.isLoggedIn 
        ? props.sticky_notes.map((stickyNote) => {
                return (
                    <div key={stickyNote.id}>
                        <p>Listing URL: {stickyNote.jobListing_url}</p>
                        <p>Company: {stickyNote.company}</p>
                        <p>Title: {stickyNote.title}</p>
                        <p>Location: {stickyNote.location}</p>
                        <p>Application Status: {stickyNote.app_status}</p>
                        <p>Notes: {stickyNote.notes}</p>
                        <button onClick={(evt) => showEdit(evt)}>Edit Sticky</button>

                    </div>
                )
            })
        : "UNAUTHORIZED";
    
    return (
        <div>
            <div>
                { displayAll }
            </div>
            <div>
            {
                props.editButton
                ?
                <EditStickyNote
                    editButton={props.editButton}
                    showCreateForm={props.showCreateForm}
                    listingUrl={props.listingUrl}
                    company={props.company}
                    title={props.title}
                    location={props.location}
                    appStatus={props.appStatus}
                    notes={props.notes}
                    deleteSticky={props.deleteSticky}
                />
                :
                <CreateStickyNote
                    createSticky={props.createSticky}
                    listingUrl={props.listingUrl}
                    company={props.company}
                    title={props.title}
                    location={props.location}
                    appStatus={props.appStatus}
                    notes={props.notes}
                />
            }
            </div>
        </div>
    );
}

export default ShowAllStickyNotes;