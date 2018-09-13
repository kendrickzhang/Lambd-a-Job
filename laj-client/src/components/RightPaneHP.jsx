import React from 'react';

import JobSearchForm    from './JobSearchForm';
import JobListingView   from './JobListingView';

function RightPaneHP(props) {
    return (
        <div className="jobPortalContainer">
            <div className="jobSearchFormContainer">
                <JobSearchForm
                    onChange={props.onChange}
                />
            </div>
            <div className="jobSearchViewContainer">
                <JobListingView
                    onChange={props.onChange}
                />
            </div>            
        </div>
    );
}

export default RightPaneHP;