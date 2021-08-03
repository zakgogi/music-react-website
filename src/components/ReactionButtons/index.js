import React, { useState } from 'react';

const reactButtons = () => {
    const [ liked, setLiked ] = useState(false);
    const [ disliked, setDisliked ] = useState(false); 

    const userLiked = (currentButton) => {
        if (!liked){
            currentButton.style.background = "lightgreen";
            currentButton.style.transform = "scale(1.1)";
            setLiked(true);
        } else {
            currentButton.style.background = "lightgrey";
            currentButton.style.transform = "scale(1.0)";
            setLiked(false);
        }
    }

    const userDisliked = (currentButton) => {
        if (!disliked){
            currentButton.style.background = "lightsalmon";
            currentButton.style.transform = "scale(1.1)";
            setDisliked(true);
        } else {
            currentButton.style.background = "lightgrey";
            currentButton.style.transform = "scale(1.0)";
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