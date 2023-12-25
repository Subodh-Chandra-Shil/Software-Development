import React from "react";
import styles from "./Calculator.module.css";
import { ButtonContainer } from "./ButtonContainer";

export const Calculator = () => {
    return (
        <div className={`${styles.calculator}`}>
            <input type="text" className="border border-black" />
            <ButtonContainer />
        </div>
    );
};
