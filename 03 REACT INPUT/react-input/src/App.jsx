import { useState } from "react";
import Skills from "./Skills";
import Radio from "./Radio";
import MapFun from "./MapFun";
import Clock from "./Clock";
function App() {

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const [color, setColor] = useState('red')
  return (
    <div>
      <h1>Get Input Field Value & Controlled Component</h1>
      <form action="">
        <input type="text" onChange={(event) => setName(event.target.value)} placeholder="Enter Your Name" /> <br /><br />
        <input type="text" onChange={(event) => setEmail(event.target.value)} placeholder="Enter Your Email" /><br /><br />
        <input type="text" onChange={(event) => setPassword(event.target.value)} placeholder="Enter Your Password" /><br /><br />
        <button>Submit</button>
        <button onClick={() => { setName(""); setEmail(""); setPassword("") }}>CLear</button>
        <br /><br />
        <h1>{name}</h1>
        <h1>{email}</h1>
        <h1>{Password}</h1>
        <br />
        <Skills />
        <br />
        <Radio />
        <MapFun />
        <Clock color={color} />

        <div>
          <h1>Digital Clock in React js </h1>
          <select onChange={(event) => setColor(event.target.value)}>
            <option value={"red"}>Red</option>
            <option value={"blue"}>Blue</option>
            <option value={"green"}>Green</option>
            <option value={"orange"}>Orange</option>
          </select>
        </div>
      </form>
    </div>
  )
}

export default App;