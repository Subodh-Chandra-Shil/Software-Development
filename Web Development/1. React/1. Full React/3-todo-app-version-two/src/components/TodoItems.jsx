import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = () => {
    // const contextObj = useContext(TodoItemsContext);
    // const todoItems = contextObj.todoItems;
    // const deleteItem = contextObj.deleteItem;

    const { todoItems, deleteItem } = useContext(TodoItemsContext);

    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
                <TodoItem
                    key={item.todoID}
                    todoID={item.todoID}
                    todoDate={item.dueDate}
                    todoName={item.name}
                />
            ))}
        </div>
    );
};

export default TodoItems;
