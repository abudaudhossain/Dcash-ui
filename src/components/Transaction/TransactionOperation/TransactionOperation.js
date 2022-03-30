import React from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

const transactions = ['Send', 'CashOut', 'Payment']

const TransactionOperation = () => {
    const search = useLocation().search;
    let type = new URLSearchParams(search).get('transaction');

    console.log(type)

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="m-2 p-1 w-25" {...register("accountNo")} placeholder="Account No" required />
                <input className="m-2 p-1 w-25" {...register("Password")} placeholder="Password" required />
                <input className="m-2 p-1 w-25" type="number" {...register("amount")} placeholder="Amount" required />
                <select className="m-2 px-3 py-1" {...register("transactionType")}>
                    <option value={type ? type : ""}>{type ? type : "transaction Type"}</option>
                    {
                        transactions.map((transaction, index) => <option key={index} value={transaction}>{transaction}</option>)
                    }
                </select>
                <input className="m-2 px-3 py-1" type="submit" />
            </form>
        </section>
    );
}

export default TransactionOperation;