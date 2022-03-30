import React from "react";
import "./myTransaction.css"

const MyTransaction = ({ transaction }) => {
    return (
        <div className="trans-card p-5 text-center">
            <h3>{transaction}</h3>
        </div>
    );
}


export default MyTransaction;