import React from 'react';

function DeleteStickyNote() {
    function handleDeleteNote(evt) {
        evt.preventDefault();
    }

    return (
        <div>
            <button onClick={(evt) => {handleDeleteNote(evt)}}>Delete This Sticky</button>
        </div>
    ); 
}

export default DeleteStickyNote;