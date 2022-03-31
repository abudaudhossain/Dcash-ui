import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="container w-50 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control"   {...register("name")} placeholder="Name" required />
                    <label htmlFor="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control"   {...register("phone")} placeholder="Phone" required />
                    <label htmlFor="floatingInput">Phone Number</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Password"  {...register("password")} required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>


                <div className="form-floating  mb-3">
                    <input type="text" className="form-control" placeholder="Account Type"  {...register("accountType")} required />
                    <label htmlFor="floatingAccountType">Account Type</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control"   {...register("currency")} placeholder="Currency" required />
                    <label htmlFor="floatingInput">Currency</label>
                </div>

                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="City"  {...register("city")} required />
                    <label htmlFor="floatingCity">City</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Country"  {...register("country")} required />
                    <label htmlFor="floatingCountry">Country</label>
                </div>

                <div className="mb-3 form-check">
                    <input {...register("agreement")} type="checkbox" className="form-check-input" id="exampleCheck1" required />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>


                {/* <select className="m-2 px-3 py-1" {...register("transactionType")}>
                    <option value={type ? type : ""}>{type ? type : "transaction Type"}</option>
                    {
                        transactions.map((transaction, index) => <option key={index} value={transaction}>{transaction}</option>)
                    }
                </select> */}
                <input className="m-2 px-3 py-1 btn btn-primary" type="submit" />
            </form>
        </section>
    );
}


export default Register;