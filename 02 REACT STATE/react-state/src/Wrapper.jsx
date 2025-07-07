

function Wrapper({children,color="green"}){
 
    return (
        <div style={{color:color,border:"5px solid black" , width:"300px"}}>
            <hr />
            <h1>Wrapper Component</h1>
            <h2>Hello Everyone</h2>
            {children}
        </div>
    )
}

export default Wrapper