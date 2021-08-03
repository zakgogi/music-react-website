import React, { useState } from 'react';

const reactButtons = () => {
    const [ liked, setLiked ] = useState(false);
    const [ disliked, setDisliked ] = useState(false); 

    const userLiked = (currentButton) => {
        if (!liked){
            currentButton.style.background = "green";
            setLiked(true);
        } else {
            currentButton.style.background = "none";
            setLiked(false);
        }
    }

    const userDisliked = (currentButton) => {
        if (!disliked){
            currentButton.style.background = "red";
            setDisliked(true);
        } else {
            currentButton.style.background = "none";
            setDisliked(false);
        }
    }

    return (
        <section>
            <button onClick={e => userLiked(e.target)}>Like</button>
            <button onClick={e => userDisliked(e.target)}>Dislike</button>

        </section>
    )

}

export default reactButtons;