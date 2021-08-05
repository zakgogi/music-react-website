import React, { useEffect, useState, useRef } from 'react';
import './style.css';
const Chatbox = () => {
    const [ chat, setChat ] = useState([]);
    const notesEnd = useRef();

    useEffect(() => {
        notesEnd.current.scrollIntoView({ behavior: "smooth" })
    }, [chat])

    function generateDate(){
        let date = new Date();
        return `${date.toString().slice(4,10)}, ${date.toString().slice(16, 21)}`;
    }

    function addChatMessage(e){
        console.log(notesEnd);
        e.preventDefault();
        let input = e.target[0].value;
        const generatedDate = generateDate();
        if (input){
            setChat(prevChat => prevChat.concat({message:`${input}`, date: `${generatedDate}`}));
        }
        e.target[0].value = "";
        
    }

    const formatMessages = () => {
        return chat.map((item, index) => {
            return (
                <section key={index} id="message">
                    <p>{item.message}<span class="hiddenDate">{item.date}</span></p>
                    
                </section>
            )}
        )
    }

    return (
        <section id="chatBox">
            <section id="chatMessages">
                { chat.length !==0 ? <h4>{generateDate()}</h4> : <h4>No messages have been sent yet..</h4> }
                { formatMessages() }
                <span ref={notesEnd}></span>
            </section>
            <form onSubmit={addChatMessage}>
                <input id="chatInput" type="text"></input>
                <input id="chatSubmit" type="submit"></input>
            </form>
        </section>
    )
}

export default Chatbox;