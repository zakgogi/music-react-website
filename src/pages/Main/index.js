import React, { useState } from 'react';
import { Artist, Albums } from '../../components';

function Main() {
    return (
      <main>
        <h1>Favourite Artist</h1>
        <Artist />
        <Albums />
      </main>
    );
  }

export default Main;