import React, { useState } from 'react';
import { Artist, Albums, Activity } from '../../components';
import './Main.css';


function Main() {
    const [ showActivity, setShowActivity ] = useState(false);

    const toggleActivity = () => setShowActivity(prevState => !prevState)
    return (
      <main>
        <h1>Favourite Artist</h1>
        <Artist />
        <Albums />
        <section id="activitySection">
          <h3>Why not try an activity while you listen to some of this music</h3>
          { showActivity ? <Activity close={toggleActivity} /> : <button id="findActivity" onClick={toggleActivity}>Find Activities</button>}
        </section>
      </main>
    );
  }

export default Main;