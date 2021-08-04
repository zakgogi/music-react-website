import React, { useEffect, useState } from 'react';
const API = "https://www.boredapi.com/api/activity?participants=1";
import axios from 'axios';
import './Activity.css';

const Activity = ({close}) => {
    const [ activity, setActivity ] = useState([]);
    useEffect(()=>{
        const fetchActivity = async () => {
            try {
                let { data } = await axios.get(API);
                setActivity(data.activity);
            } catch (error) {
                console.log(error);
            }
        }
        fetchActivity();
        const activityStream = setInterval(fetchActivity, 6000);

        return () => clearInterval(activityStream);
    }, [])

    return (
        <>
            <p>{activity}</p>
            <button onClick={close}>Stop Getting Activities</button>
        </>
    )   

}


export default Activity;
