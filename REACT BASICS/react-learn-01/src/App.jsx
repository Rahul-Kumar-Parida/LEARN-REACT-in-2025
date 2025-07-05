import Header from "./Header"
import Rahul,{Satya,Satish} from "./UserComponents"
function apple(){
  return (
    <div>
    <Header/>
    <h1>Hello</h1>
    <h1>Byy</h1>
    <Fruit/>
    <Color/>
    <Rahul/>
    <Satya/>
    <Satish/>
    </div>
  )
}

function Fruit(){
  return <h1>Mango</h1>
}

function Color(){
  return <h1>Yellow</h1>
}
export default apple