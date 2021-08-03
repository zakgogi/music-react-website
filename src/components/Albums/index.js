import React, { useState } from 'react';
import reactButtons from '../ReactionButtons';
import './Content.css';

const Albums = () => {
    const [albums, setAlbums ] = useState([
        { id: 'Psycho', name: 'Psychodrama', img: 'https://upload.wikimedia.org/wikipedia/en/7/75/Dave_Psychodrama.jpeg'},
        { id: 'WAAITT', name: 'We\'re All Alone In This Together', img: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Dave_-_We%27re_All_Alone_in_This_Together.jpg'}
    ])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.id);
        let ratingDots = document.querySelectorAll(`span#${e.target.id}`);
        let userInput = e.target[0].value;
        for (let i=0; i<ratingDots.length; i++){
            ratingDots[i].classList.remove('colouredDot');
        }
        for (let i=0; i<userInput; i++){
            ratingDots[i].classList.add('colouredDot')
        }
    }

    const renderAlbums = () => {
        return albums.map(a => 
            (
             <section>
                 <span id={a.id} class="dot"></span>
                 <span id={a.id} class="dot"></span>
                 <span id={a.id} class="dot"></span>
                 <span id={a.id} class="dot"></span>
                 <span id={a.id} class="dot"></span>
                 <h3>{a.name}</h3>
                 <img src={a.img}></img>
                 { reactButtons() }
                 <form id={a.id} onSubmit={handleFormSubmit}>
                     <label for="numberInput">Your rating of this album:</label>
                     <input id="numberInput" type="number" min="1" max="5"></input>
                     <input type="submit"></input>
                 </form>
             </section>   
            
        ))
    }

    return (
        <section>
            { renderAlbums() }
        </section>
    )
}

export default Albums;