import { useState, useRef } from "react";

function AddTodo({ onNewItem }) {
    // const [todoName, setTodoName] = useState("");
    // const [dueDate, setDueDate] = useState("");
    const todoNameElement = useRef(null);
    const dueDateElement = useRef(null);

    /* const handleNameChange = (e) => {
        setTodoName(e.target.value);
    }; */

    /* const handleDateChange = (e) => {
        setDueDate(e.target.value);
    }; */

    /* const handleAddButtonClick = () => {
        if (todoName === "" || dueDate === "")
            return;
        else
            onNewItem(todoName, dueDate);

        setTodoName("");
        setDueDate("");
    }; */

    const handleAddButtonClickRef = () => {
        let todoName = todoNameElement.current.value;
        let dueDate = dueDateElement.current.value;

        todoNameElement.current.value = "";
        dueDateElement.current.value = "";

        if (todoName === "" || dueDate === "")
            return console.error('give some input');
        else
            onNewItem(todoName, dueDate);
    }

    return (
        <div className="container text-center">
            <div className="row kg-row">
                <div className="col-6">
                    <input
                        ref={todoNameElement}
                        type="text"
                        placeholder="Enter Todo Here"
                    // value={todoName}
                    // onChange={handleNameChange}
                    />
                </div>

                <div className="col-4">
                    <input
                        ref={dueDateElement}
                        type="date"
                    // value={dueDate}
                    // onChange={handleDateChange}
                    />
                </div>

                <div className="col-2">
                    <button
                        type="button"
                        className="btn btn-success kg-button"
                        // onClick={handleAddButtonClick}
                        onClick={handleAddButtonClickRef}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    );
}

export default AddTodo;
