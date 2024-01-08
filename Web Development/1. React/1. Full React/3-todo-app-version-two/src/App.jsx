import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { WelcomeMessage } from "./components/WelcomeMessage";
import TodoItemsContextProvider from "./store/todo-item-store";

function App() {
    // todoItems is an array of object, so empty initial value should be an empty array
    // const [todoItems, setTodoItems] = useState([]);

    /* Using useState */
    /* const addNewItem = (itemName, itemDueDate) => {
        console.log(`New item added: ${itemName} Date: ${itemDueDate}`);
        let uid = uuidv4();

        while (todoItems.some((item) => item.id === uid)) {
            uid = uuidv4();
        }

        const newTodoItems = [
            ...todoItems,
            { name: itemName, dueDate: itemDueDate, todoID: uid }
        ];

        /// Not a good way to updating state using previous value
        // setTodoItems(newTodoItems);

        /// good practice ✅✅
        setTodoItems((currentValue) => [
            ...currentValue,
            { name: itemName, dueDate: itemDueDate, todoID: uid }
        ]);
    }; */

    /* const deleteItem = (todoID) => {
        const newTodoItems = todoItems.filter((item) => item.todoID !== todoID);
        setTodoItems(newTodoItems);
    }; */

    return (
        <TodoItemsContextProvider>
            <center className="todo-container">
                <AppName />
                <AddTodo />
                <WelcomeMessage />
                <TodoItems />
            </center>
        </TodoItemsContextProvider>
    );
}

export default App;
