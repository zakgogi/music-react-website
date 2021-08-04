import React, { useState } from 'react';
import { Activity } from '../../components';
import './style.css';

function ActivityRender(){
    const [ showActivity, setShowActivity ] = useState(false);
    const toggleActivity = () => setShowActivity(prevState => !prevState)
    return (
        <section id="activitySection">
            <h3>Why not try an activity while you listen to some of this music</h3>
            { showActivity ? <Activity close={toggleActivity} /> : <button id="findActivity" onClick={toggleActivity}>Find Activities</button>}
        </section>
    )
}

export default ActivityRender;