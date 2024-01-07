import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer, useState } from "react";
import { WelcomeMessage } from "./components/WelcomeMessage";
import { v4 as uuidv4 } from "uuid";
import { TodoItemsContext } from "./store/todo-item-store";

const todoItemsReducer = (action) => {
    return [];
};

function App() {
    // todoItems is an array of object, so empty initial value should be an empty array
    // const [todoItems, setTodoItems] = useState([]);

    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    const addNewItem = (itemName, itemDueDate) => {
        console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
        let uid = uuidv4();

        while (todoItems.some((item) => item.id === uid)) {
            uid = uuidv4();
        }

        

        /* const newTodoItems = [
            ...todoItems,
            { name: itemName, dueDate: itemDueDate, todoID: uid }
        ];

        /// Not a good way to updating state using previous value
        // setTodoItems(newTodoItems);

        /// good practice ✅✅
        setTodoItems((currentValue) => [
            ...currentValue,
            { name: itemName, dueDate: itemDueDate, todoID: uid }
        ]); */
    };

    const deleteItem = (todoID) => {
        const newTodoItems = todoItems.filter((item) => item.todoID !== todoID);
        setTodoItems(newTodoItems);
    };

    return (
        <TodoItemsContext.Provider
            value={{ todoItems, addNewItem, deleteItem }}
        >
            <center className="todo-container">
                <AppName />
                <AddTodo />

                {/* {todoItems.length === 0 && <WelcomeMessage />} */}
                <WelcomeMessage />
                <TodoItems></TodoItems>
            </center>
        </TodoItemsContext.Provider>
    );
}

export default App;
