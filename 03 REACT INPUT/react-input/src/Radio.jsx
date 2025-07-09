import { useState } from "react";

function Radio() {
    const [gender, setGender] = useState("female");
    const [city, setCity] = useState("delhi");

    return (
        <div>
            <h3>Handle Radio and Dropdown</h3>

            <h1>Select Gender</h1>
            <input
                type="radio"
                onChange={(e) => setGender(e.target.value)}
                value="male"
                name="gender"
                checked={gender === "male"}
                id="male"
            />
            <label htmlFor="male">Male</label>

            <input
                type="radio"
                onChange={(e) => setGender(e.target.value)}
                value="female"
                name="gender"
                checked={gender === "female"}
                id="female"
            />
            <label htmlFor="female">Female</label>

            <h2>Selected Gender: {gender}</h2>

            <h4>Select City</h4>
            <select value={city} onChange={(e) => setCity(e.target.value)}>
                <option value="noida">Noida</option>
                <option value="gurgaon">Gurgaon</option>
                <option value="delhi">Delhi</option>
            </select>

            <h3>Selected City: {city}</h3>
        </div>
    );
}

export default Radio;
