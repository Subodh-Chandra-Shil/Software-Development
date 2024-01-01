import React, { useState } from "react";
import styles from "./Calculator.module.css";
import { ButtonContainer } from "./ButtonContainer";
import { Display } from "./Display";

export const Calculator = () => {
    const [calVal, setCalVal] = useState("");

    const onButtonClick = (buttonText) => {
        if (buttonText === "C") {
            setCalVal("");
        } else if (buttonText === "=") {
            const result = eval(calVal);
            setCalVal(result);
        } else {
            const newDisplayValue = calVal + buttonText;
            setCalVal(newDisplayValue);
        }
        console.log(buttonText);
    };

    return (
        <div className={`${styles.calculator}`}>
            <Display displayValue={calVal} />
            <ButtonContainer onButtonClick={onButtonClick} />
        </div>
    );
};
