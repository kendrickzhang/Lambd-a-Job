import React from 'react';

function deleteStickyNote(id) {
    const jwt = localStorage.getItem("jwt")
    const url = `http://localhost:3000/sticky_notes/${id}`;
    const init = { 
        method: 'DELETE',
        headers: {
            "Authorization": `Bearer ${jwt}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        mode: 'cors',
    }

    fetch(url, init)
        .then(() => {
            alert('Your Sticky Note Has Been Removed.')
        })
        .catch(err => console.log(err));
}

function DeleteStickyNote() {
    return (
        <div>
            <button onClick={() => deleteStickyNote()}>Delete This Sticky</button>
        </div>
    ); 
}

export default DeleteStickyNote;