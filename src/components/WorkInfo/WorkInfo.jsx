import React from 'react';

import './WorkInfo.scss'

const WorkInfo = props => {
    const { profile } = props;
    return (
        <div className='work-info'>
            <h1 className='border-title'>Work Experience</h1>
            {profile.experience && profile.experience.map(exp =>
                <div>
                    <h4>{exp.name}</h4>
                    <h5>{exp.date}</h5>
                    <p>{exp.description}</p>
                </div>
            )}

            <h1 className='border-title'>Education</h1>
            {profile.education && profile.education.map(education =>
                <div>
                    <h4>{education.name}</h4>
                    <h5>{education.date}</h5>
                    <p>{education.description}</p>
                </div>
            )}
        </div>
    );
}
export default WorkInfo;