import React, { useState } from "react";
import styles from "./FoodInput.module.css";

export const FoodInput = ({ handleKeyDown }) => {
    const [textValue, setTextValue] = useState("Food Item Entered by User");

    const handleFoodInput = (foodName, randomName) => (e) => {
        console.log(`foodName is ${foodName}`);
        console.log(`randomName is ${randomName}`);
        console.log(e.target.value);
        setTextValue(`Your food: ${e.target.value}`);
    };

    return (
        <div>
            <input
                type="text"
                className={`border p-1 ${styles.foodInput}`}
                placeholder="Say Food Name.."
                // name=""
                // onChange={(e, foodname) =>
                //     console.log(e.target.value, foodname)
                // }
                // onChange={handleFoodInput("somename", "random")}
                onKeyDown={handleKeyDown}
            />
            <p className="mt-2 mb-2 pl-1 h-7">{textValue}</p>
        </div>
    );
};
