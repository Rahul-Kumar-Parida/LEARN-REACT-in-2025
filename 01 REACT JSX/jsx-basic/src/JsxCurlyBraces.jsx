function Check() {
    const userName = "Rahul Kumar"
    let x = 34
    let y = 45
    function button() {
        return "I am A button"
    }
    function sum(a, b) {
        return a + b
    }

    const userObj = {
        name: "Rahul",
        age: 23,
        email: "abc@gmail.com"
    }
    let path = "https://t4.ftcdn.net/jpg/05/38/48/03/240_F_538480363_Xznvp7KB7dmeqRcsCsDB2XIrfNVHLWML.jpg"
    const userArray = ["ram", "Sam", "Peter"]
    return (
        <div>
            <h1>JSX with Curly Bracess</h1>
            <h1>{userName}</h1>
            <h3>{x + y}</h3>
            <h1>{button()}</h1>
            <h3>{sum(3, 4)}</h3>
            <h1>{userObj.name}</h1>
            <h1>{userArray}</h1>
            <img src={path} alt="photo" />
        </div>
    )
}

export default Check