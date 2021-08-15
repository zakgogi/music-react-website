import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import './style.css';

const socket = io.connect("http://localhost:3000", { transports: ["websocket"] } );

const Chatbox = () => {
    const [ chat, setChat ] = useState([]);
    const [ user, setUser ] = useState("");
    // const [ yourMessages, setYourMessages ] = useState([]);
    const notesEnd = useRef();
    const userRef = useRef("");
    useEffect(() => {
        notesEnd.current.scrollIntoView({ behavior: "smooth" })
    }, [chat])

    useEffect(() => {
        userRef.current = user;
        console.log(userRef.current);
    }, [user]);
    
    //Listen for socket event
    useEffect(() => {
        const generatedDate = generateDate();
        socket.on('chat', (data) => {
            console.log(user);
            if (data.username === userRef.current){
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

    function setUsername(e){
        e.preventDefault();
        let userInput = e.target[0].value;
        e.target[0].value = "";
        setUser(userInput);
    }


    function addChatMessage(e){
        e.preventDefault();
        let chatInput = e.target[0].value;
        e.target[0].value = "";
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
                        <p>You: {item.message}<span class="hiddenDate">{item.date}</span></p>
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
        <>
        <form onSubmit={setUsername} id="usernameSection">
            <input id="usernameInput" type="text" placeholder="Your username here"></input>
            <input type="submit"></input>
        </form>
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
        </>
    )
}

export default Chatbox;