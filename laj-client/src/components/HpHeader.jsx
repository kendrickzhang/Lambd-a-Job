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
        <header className="headerComponentTag">
            <div className="appTitle">Lambd a Job</div>
            <div className="headerButton">{ headerButton }</div>
        </header>
    );
}

export default HpHeader;