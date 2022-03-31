import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="container w-50 mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput"  {...register("Email")} placeholder="Email" required />
                    <label  htmlFor="floatingInput">Email address</label>
                </div>

                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"  {...register("password")} required />
                    <label  htmlFor="floatingPassword">Password</label>
                </div>
                <input className="my-2 px-3 py-1 btn btn-primary" type="submit" value="LogIn"/>
            </form>
        </section>
    );
}

export default Login;