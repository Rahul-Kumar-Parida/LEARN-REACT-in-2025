function User({user}){
 
    return (
        <div>
            <hr />
            <h1>User Component</h1>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export default User