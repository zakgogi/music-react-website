import React, { useState } from 'react';

const reactButtons = () => {
    const [ liked, setLiked ] = useState('unliked');
    const [ disliked, setDisliked ] = useState('undisliked'); 

    const userLiked = (currentButton) => {
        if (liked === 'unliked'){
            currentButton.style.background = "green";
            setLiked('liked');
        } else {
            currentButton.style.background = "none";
            setLiked('unliked');
        }
    }

    const userDisliked = (currentButton) => {
        if (disliked === 'undisliked'){
            currentButton.style.background = "red";
            setDisliked('disliked');
        } else {
            currentButton.style.background = "none";
            setDisliked('undisliked');
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