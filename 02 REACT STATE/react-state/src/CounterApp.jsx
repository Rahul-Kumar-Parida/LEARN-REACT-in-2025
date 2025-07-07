import { useState } from "react"



function Counter() {
    const [count, setCount] = useState(0)
    const chageCount = () => {
        setCount(count + 1)
    }
    const revchage=()=>{
        setCount(count-1)
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h1>{count}</h1>
            <button onClick={chageCount}>Counter +</button>
            <button onClick={revchage}>Counter -</button>
        </div>
    )
}

export default Counter