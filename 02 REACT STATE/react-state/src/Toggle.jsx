import { useState } from "react"

function Toggle(){
    const [display,setDisplay]=useState(true)
    return (
        <div>


            <h1>Toggle User</h1>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display?<h1>Rahul Kumar</h1>:null
            }
            
        </div>
    )
}

export default Toggle