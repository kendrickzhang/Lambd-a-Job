import React from 'react';

import ShowAllStickyNotes   from './ShowAllStickyNotes';

function LeftPaneHP(props) {
    return (
        <ShowAllStickyNotes
            isLoggedIn={props.isLoggedIn}
            sticky_notes={props.sticky_notes}
            current_note={props.current_note}
            onChange={props.onChange}
            createSticky={props.createSticky}
            editSticky={props.editSticky}
            listingUrl={props.jobListing_url}
            company={props.company}
            title={props.title}
            location={props.location}
            appStatus={props.app_status}
            notes={props.notes}
            editButton={props.editButton}
            handleEditBtn={props.handleEditBtn}
            showCreateForm={props.showCreateForm}
            deleteSticky={props.deleteSticky}
            getOneNote={props.getOneNote}
        />
    );
}

export default LeftPaneHP;