import { createContext, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoItemsContext = createContext({
    todoItems: [],
    addNewItem: () => {},
    deleteItem: () => {}
});

// Reducer function
const todoItemsReducer = (currentTodoItems, action) => {
    let newTodoItems = currentTodoItems;

    const { itemName, itemDueDate } = action.payload;

    if (action.type === "NEW_ITEM") {
        let uniqueID = uuidv4();

        while (currentTodoItems.some((item) => item.todoID === uniqueID)) {
            uniqueID = uuidv4();
        }
        const todoID = uniqueID;

        newTodoItems = [
            ...currentTodoItems,
            {
                name: itemName,
                dueDate: itemDueDate,
                todoID: todoID
            }
        ];
    } else if (action.type === "DELETE_ITEM") {
        newTodoItems = currentTodoItems.filter(
            (item) => item.todoID !== action.payload.todoID
        );
    }

    return newTodoItems;
};

const TodoItemsContextProvider = ({ children }) => {
    const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

    /* Using useReducer */
    const addNewItem = (itemName, itemDueDate) => {
        const newItemAction = {
            type: "NEW_ITEM",
            payload: {
                itemName,
                itemDueDate
            }
        };

        dispatchTodoItems(newItemAction);
    };

    const deleteItem = (todoID) => {
        const deleteItemAction = {
            type: "DELETE_ITEM",
            payload: {
                todoID
            }
        };

        dispatchTodoItems(deleteItemAction);
    };

    return (
        <TodoItemsContext.Provider
            value={{ todoItems, addNewItem, deleteItem }}
        >
            {children}
        </TodoItemsContext.Provider>
    );
};

export default TodoItemsContextProvider;
