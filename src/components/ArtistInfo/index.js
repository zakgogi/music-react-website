import React, { useState } from 'react';

const Artist = () => {
    const [name, setName] = useState('Dave');
    const [artistDesc, setArtistDesc ] = useState('David Orobosa Omoregie (born 5 June 1998), known professionally as Dave or Santan Dave, is a British rapper, singer, songwriter, record producer and actor. Dave has gained acclaim for his socially conscious lyricism and wordplay, and is among the most recognised British rappers');
    const [genre, setGenre ] = useState('Rap');
    return (
        <section>
            <h1>{name}</h1>
            <h2>{genre}</h2>
            <p>{artistDesc}</p>
        </section>
    )
}

export default Artist;