import React from 'react';

import JobSearchForm    from './JobSearchForm';
import JobListingView   from './JobListingView';

function RightPaneHP(props) {
    return (
        <div>
            <div>
                <JobSearchForm
                    onChange={props.onChange}
                />
            </div>
            <div>
                <JobListingView
                    onChange={props.onChange}
                />
            </div>            
        </div>
    );
}

export default RightPaneHP;