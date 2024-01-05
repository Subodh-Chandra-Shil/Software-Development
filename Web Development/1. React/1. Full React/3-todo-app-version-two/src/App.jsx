import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { v4 as uuidv4 } from 'uuid';

function App() {

    // todoItems is an array of object, so empty initial value should be an empty array
    const [todoItems, setTodoItems] = useState([]);

    const handleNewItem = (itemName, itemDueDate) => {
        console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
        let uid = uuidv4();

        while (todoItems.some(item => item.id === uid)) {
            uid = uuidv4();
        }

        const newTodoItems = [...todoItems, { name: itemName, dueDate: itemDueDate, todoID: uid }];
        setTodoItems(newTodoItems);
    };

    const handleDeleteItem = (todoID) => {
        const newTodoItems = todoItems.filter(item => item.todoID !== todoID);
        setTodoItems(newTodoItems);
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
