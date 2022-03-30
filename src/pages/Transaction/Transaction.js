import React from "react";
import TransactionOperation from "../../components/Transaction/TransactionOperation/TransactionOperation";

const Transaction = ({ transaction = "new" }) => {
    return (
        <>
            <TransactionOperation />
        </>
    );
}

export default Transaction;