
function Event(){

    function ev(){
        return alert("Function Calling")
    }
    const fruit=(name)=>{
        alert(name)
    }
    return (
        <div>
            <button onClick={ev}>Click Me</button>
            <button onClick={()=>fruit("apple")}>Apple</button>
            <button onClick={()=>fruit("Banana")}>Banana</button>
        </div>
    )
}
export default Event