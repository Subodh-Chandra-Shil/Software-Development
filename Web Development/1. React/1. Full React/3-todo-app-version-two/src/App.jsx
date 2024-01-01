import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";

function App() {

    // todoItems is an array of object, so empty initial value should be an empty array
    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
        const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate }];
        setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoItemName) => {
        console.log(`Item deleted: ${todoItemName}`);
    }

    return (
        <center className="todo-container">
            <AppName />
            <AddTodo onNewItem={handleNewItem} />
            {todoItems.length === 0 && <WelcomeMessage />}
            <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
        </center>
    );
}

export default App;
