import React, { useState, useReducer } from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { Styles } from "../styles/Styles";

const countReducer = (count, action) => {
    let newCount = count;

    if (action === "increment") {
        newCount += 1;
    } else if (action === "decrement" && newCount >= 1) {
        newCount -= 1;
    }

    return newCount;
};

export const Counter = () => {
    /* const [count, setCount] = useState(0);

    const handleButtonPress = (prevState) => {
        console.warn("You pressed the button");
        setCount((prevState) => prevState + 1);
    }; */

    const [count, countDispatch] = useReducer(countReducer, 0);

    return (
        <View>
            <Text style={Styles.textCenter}>{count}</Text>
            <TouchableOpacity
                style={Styles.buttonDesign}
                onPress={() => countDispatch("increment")}
            >
                <Text style={Styles.buttonText}>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={Styles.buttonDesign}
                onPress={() => countDispatch("decrement")}
            >
                <Text style={Styles.buttonText}>Decrement</Text>
            </TouchableOpacity>
        </View>
    );
};
