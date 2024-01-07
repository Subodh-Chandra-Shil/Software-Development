import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
    const todoItemsContextProvider = useContext(TodoItemsContext);

    return (
        <div className={styles.itemsContainer}>
            {todoItems.map((item) => (
                <TodoItem
                    key={item.todoID}
                    todoID={item.todoID}
                    onDeleteClick={onDeleteClick}
                    todoDate={item.dueDate}
                    todoName={item.name}
                />
            ))}
        </div>
    );
};

export default TodoItems;