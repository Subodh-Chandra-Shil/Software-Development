import React from "react";
import styles from "./ButtonContainer.module.css";

export const ButtonContainer = () => {
    const buttonsName = ["C", "1", "2", "+", "3", "4", "-", "5", "6", "*", "7", "8", "/", "=", "9", "0", "."];

    return (
        <div className={`${styles.buttonsContainer}`}>
            {buttonsName.map((button) => (
                <button>{button}</button>
            ))}
        </div>
    );
};
