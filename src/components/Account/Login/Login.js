import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:8000/api/login", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                devicetoken: localStorage.getItem("deviceToken"),

            }
        }).then(res => res.json())
            .then(data => {
                if (data.type === 'error') alert("sorry try again")
                else {
                    localStorage.setItem("AccountInfo", JSON.stringify(data.data))
                }
                console.log(data)
            })
    };
    return (
        <section className="container w-50 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-floating mb-3">
                    <input type="number" className="form-control" id="floatingInput"  {...register("phone")} placeholder="Phone number" required />
                    <label htmlFor="floatingInput">Phone Number</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  {...register("password")} required />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <input className="my-2 px-3 py-1 btn btn-primary" type="submit" value="LogIn" />
            </form>
        </section>
    );
}

export default Login;