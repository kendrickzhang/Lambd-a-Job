import React from 'react';

function JobSearchForm(props) {
    return (
        <form>
            <input
                name="what"
                placeholder="What: Position, Title"
                onChange={props.onChange}
                type="text"
            />
            <input
                name="where"
                placeholder="Where: City, State"
                onChange={props.onChange}
                type="text"
            />
            <button>Search</button>
        </form>
    );
}

export default JobSearchForm;