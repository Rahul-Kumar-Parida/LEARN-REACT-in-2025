import { useState } from "react"



function Skills(){
    const [skills,setSkills]=useState([])

    const handleSkills=(event)=>{
        console.log(event.target.value,event.target.checked)
        if (event.target.checked){
            setSkills([...skills,event.target.value])
        }else{
            setSkills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return <div>
        <h1>Skills</h1>
        <input onClick={handleSkills} type="checkbox" id="python" value="python"/>
        <label htmlFor="python">PYTHON</label><br /><br />
        <input onClick={handleSkills} type="checkbox" id="java" value="java"/>
        <label htmlFor="java">JAVA</label><br /><br />
        <input onClick={handleSkills} type="checkbox" id="cpp" value="cpp"/>
        <label htmlFor="cpp">C++</label><br /><br />
        <input onClick={handleSkills} type="checkbox" id="javascript" value="javascript"/>
        <label htmlFor="javascript">JAVASCRIPT</label><br /><br />

        <h1>{skills}</h1>
    </div>
}

export default Skills