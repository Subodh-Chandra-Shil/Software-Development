import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className={styles.itemsContainer}>
      {todoItems.map((item) => (
        <TodoItem onDeleteClick={onDeleteClick} todoDate={item.dueDate} todoName={item.name}></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
