import { useState } from "react"
import Counter from "./CounterApp"
import Toggle from "./Toggle"
import User from "./User"
import College from "./College"
import Student from "./Student"
import Users from "./UserS"
import Wrapper from "./Wrapper"
function App() {
  // let fruit="Apple"
  // function changeFruit(){
  //   fruit="Banana"
  //   console.log(fruit)
  // }


  const [fruit, setFruit] = useState("Apple")
  const changefruit = () => {
    setFruit("Banana")
  }
  // let name = "rahul Kumar Parida"
  // let age = 23
  // let email = "abc@gmail.com"

  let userObject1 = {
    name: "rahul Kumar Parida",
    age: 23,
    email: "abc@gmail.com"
  }
  let userObject2 = {
    name: "Satish Kumar Pradhan",
    age: 23,
    email: "abc1@gmail.com"
  }

  let list = ["IT", "CSE", "ME", "MTECH"]

  const [student, setStudent] = useState()
  return (
    <div>
      <h1>REACT STATE</h1>
      <h1>{fruit}</h1>
      {/* <button onClick={changeFruit}>Chage Fruit Name</button> */}
      <button onClick={changefruit}>Chage Fruit</button>


      <hr />
      {student && <Student name={student} />}
      <button onClick={() => setStudent("Rahul")}>Student Name</button>
      <Counter />
      <Toggle />



      {/* <User name={name} age={age} email={email} /> */}
      <User user={userObject1} />
      <User user={userObject2} />
      <College name={list} />




      <Users name="Anil Sidhu" />
      <Users name="Rahul Kumar" />
      <Users />

      <Wrapper>
        <h1>I am a chicldren Props</h1> </Wrapper>
        <Wrapper color="red">
        <h1>I am a chicldren Props</h1> </Wrapper>
    </div>
  )
}


export default App