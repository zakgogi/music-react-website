import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import './style.css';

const socket = io.connect("http://localhost:3000", { transports: ["websocket"] } );

const Chatbox = () => {
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState("");
    // const [ yourMessages, setYourMessages ] = useState([]);
    const notesEnd = useRef();

    useEffect(() => {
        notesEnd.current.scrollIntoView({ behavior: "smooth" })
    }, [chat])


    //Listen for socket event
    useEffect(() => {
        const generatedDate = generateDate();
        socket.on('chat', (data) => {
            if (data.username === user){
                setChat(prevChat => prevChat.concat({message: data.message, date: `${generatedDate}`, sender: "you"}));
            } else {
                setChat(prevChat => prevChat.concat({message: data.message, date: `${generatedDate}`, sender: data.username}));
            }
        })
    }, []);

    function generateDate(){
        let date = new Date();
        return `${date.toString().slice(4,10)}, ${date.toString().slice(16, 21)}`;
    }

    function updateUser(e){
        let userInput = e.target.value;
        setUser(userInput);
    }

    function addChatMessage(e){
        e.preventDefault();
        currentUser = e.target[0].value;
        console.log(currentUser);
        let chatInput = e.target[1].value;
        e.target[1].value = "";
        socket.emit("chat", {
            message: chatInput,
            username: user
        });
        
    }

    const formatMessages = () => {
        return chat.map((item, index) => {
            if (item.sender === "you"){
                return (
                    <section key={index} id="message">
                        <p>{item.message}<span class="hiddenDate">{item.date}</span></p>
                        
                    </section>
                )
            } else {
                return (
                    <section key={index} id="receivedMessage">
                        <p>{item.sender}: {item.message}<span class="hiddenDate">{item.date}</span></p>
                    </section>
                )
            }
            }
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
                <input onChange={updateUser} id="usernameInput" type="text" placeholder="Your username here"></input>
                <input id="chatInput" type="text"></input>
                <input id="chatSubmit" type="submit"></input>
            </form>
        </section>
    )
}

export default Chatbox;