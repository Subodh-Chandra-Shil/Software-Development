import React from "react";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0);
    /* 
    useState() hook returns two thing in an array, these are: a variable 
    with the updated value and a method
    the method is responsible for making 
    */

    const addValue = () => {
        setCounter(counter + 1);
    };

    const removeValue = () => {
        if (counter >= 1) setCounter(counter - 1);
    };

    return (
        <div>
            <h1 className="text-center text-3xl">Counter value: {counter}</h1>
            <div className="flex gap-2 justify-center">
                <button onClick={addValue} className="border p-1 rounded ">
                    Add value
                </button>
                <button
                    className="btn border p-1 rounded"
                    onClick={removeValue}
                >
                    Remove value
                </button>
            </div>
        </div>
    );
}
