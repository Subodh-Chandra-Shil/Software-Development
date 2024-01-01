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

    const handleAddUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                const newUsers = [...users, data];
                setUser(newUsers);
            })
            .catch(err => console.error(err))

        event.target.reset();
    }

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
