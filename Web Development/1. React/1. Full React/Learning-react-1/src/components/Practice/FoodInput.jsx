import React from "react";
import styles from "./FoodInput.module.css";

export const FoodInput = () => {
    const handleFoodInput = (foodName, randomName) => (e) => {
        console.log(`foodName is ${foodName}`);
        console.log(`randomName is ${randomName}`);
        console.log(e.target.value);
    };

    return (
        <div>
            <input
                type="text"
                className={`border p-1 ${styles.foodInput}`}
                placeholder="Say Food Name.."
                name=""
                // onChange={(e, foodname) =>
                //     console.log(e.target.value, foodname)
                // }
                onChange={handleFoodInput("somename", "random")}
            />
        </div>
    );
};
