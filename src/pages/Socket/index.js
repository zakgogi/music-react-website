import React, {useState, useEffect} from 'react';
import io from 'socket.io-client';

// const socket = io.connect("http://localhost:3000", { transports: ["websocket"] } );
// const socket = io("http://localhost:3000");
const Socket = () => {

    const [socket, setSocket] = useState({message: "", name: ""});
    const [chat, setChat] = useState([]); 

    // useEffect(() => {
    //     const newSocket = io();
    //     setSocket(newSocket);
    // }, []);

    // const handleSocket = () => {
    //     const socket = io.connect("http://localhost:3000");
    // }

    return (
        <div>
            <h1>Socket</h1>
        </div>  
    );
}
 
export default Socket;