import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [users, setUser] = useState([]);

    useEffect(() => {
        const URL = "http://localhost:5500/users";
        fetch(URL)
            .then((RES) => RES.json())
            .then((DATA) => setUser(DATA));
    }, []);

    const handleAddUser = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const age = e.target.email.value;
        const user = { name, age };
        console.log(name, age);

        fetch("http://localhost:5500/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(user)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                const newUsers = [...users, data];
                setUser(newUsers);
            })
            .catch((err) => console.log(err));

        e.target.reset();
    };

    return (
        <div>
            <section>
                <h2>Users: {users.length}</h2>
                {users.map((user) => (
                    <p key={user.id}>{user.name}</p>
                ))}
            </section>

            <form onSubmit={handleAddUser} action="">
                <input
                    typeF="text"
                    name="name"
                    id=""
                    placeholder="Enter your name"
                    required
                />

                <br />
                <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter your email"
                    required
                />
                <br />
                <button type="submit">Add User</button>
            </form>
        </div>
    );
}

export default App;
