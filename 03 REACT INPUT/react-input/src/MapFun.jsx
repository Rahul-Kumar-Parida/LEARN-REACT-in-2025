import User from "./User"

function MapFun() {
    const userData = [
        {
            name: "Rahul",
            age: 24,
            email: "abc@gmail.com",
            id: 1
        },
        {
            name: "Satish",
            age: 23,
            email: "satish@gmail.com",
            id: 2
        },
        {
            name: "Satya",
            age: 24,
            email: "satya@gmail.com",
            id: 3
        },
        {
            name: "Himanshu",
            age: 24,
            email: "himanshu@gmail.com",
            id: 4
        },
    ]
    return (
        <div>
            <h1>Loop in JSX with Map Function</h1>
            <table border="1">
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>NAME</td>
                        <td>EMAIL</td>
                        <td>AGE</td>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user) => (
                        <tr key={user.id }>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <br /><br /><hr />

            <h1>Reuse Component in Loop</h1>
            {
                userData.map((user)=>(
                    <div key={user.id}>
                        <User data={user}/>
                    </div>
                ))
            }
        </div>
    )
}

export default MapFun