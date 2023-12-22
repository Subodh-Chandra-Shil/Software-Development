import React, { useState } from "react";
import styled from "styled-components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const StyledDiv = styled.div`
    background-image: url("https://images.unsplash.com/photo-1579621970795-87facc2f976d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
`;

export default function Currency_converter() {
    const [amount, setAmount] = useState();
    const [from, setFrom] = useState("usd");
    const [to, setTo] = useState("bdt");
    const [convertedAmount, setConvertedAmount] = useState();

    const currencyInfo = useCurrencyInfo(from);

    return (
        <StyledDiv className="h-screen bg-no-repeat w-full flex flex-wrap justify-center items-center">
            <h1 className="text-center">Testing</h1>
        </StyledDiv>
    );
}
