import React from 'react';

function HpHeader(props) {
    const headerButton = props.isLoggedIn
        ? <div>
            <button onClick={(evt) => {
                evt.preventDefault();
                props.logout();
            }}>Logout</button>
        </div>
        : "Please Log In";
    return (
        <header>
            <div>Lambd a Job</div>
            <div>{ headerButton }</div>
        </header>
    );
}

export default HpHeader;