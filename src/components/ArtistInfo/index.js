import React, { useState } from 'react';
import './Artist.css';

const Artist = () => {
    const [name, setName] = useState('Dave');
    const [artistDesc, setArtistDesc ] = useState('David Orobosa Omoregie (born 5 June 1998), known professionally as Dave or Santan Dave, is a British rapper, singer, songwriter, record producer and actor. Dave has gained acclaim for his socially conscious lyricism and wordplay, and is among the most recognised British rappers.');
    const [genre, setGenre ] = useState('Rap');
    const [artistImage, setArtistImage ] = useState('https://ichef.bbci.co.uk/news/976/cpsprodpb/E886/production/_119662595_hi059078964.jpg')
    return (
        <section id="artistInfo">
            <h1>Artist: {name}</h1>
            <h2>Genre: {genre}</h2>
            <img id="artist" src={artistImage}></img>
            <p>Description: {artistDesc}</p>
        </section>
    )
}

export default Artist;