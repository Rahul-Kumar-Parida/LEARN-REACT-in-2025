import { useState,useEffect } from "react";

const Clock=({color})=>{
    const [time,setTime]=useState(0);

    useEffect(()=>{
        setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        },1000);
    })
    return (
        <div>
            <br /><hr />
            <h1>Time</h1>
            <h1 style={{color:color,backgroundColor:'#000', width:"120px",padding:"10px"}}>{time}</h1>
        </div>
    )
}

export default Clock