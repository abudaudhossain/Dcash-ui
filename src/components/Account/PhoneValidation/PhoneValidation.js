import React from "react";
import { useForm } from "react-hook-form";

const PhoneValidation = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:8000/api/numberValidation", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json",
                devicetoken: localStorage.getItem("deviceToken"),

            }
        }).then(res => res.json())
            .then(data => {
                if (data.type === 'error') alert(`sorry try again ${data.message}`)
                else {
                    localStorage.setItem("AccountInfo", JSON.stringify(data.data[0]))
                    localStorage.setItem("AccountNo", data.data[0].AccountNo);
                    localStorage.setItem("numberValidation", data.data[0].numberValidation);
                    localStorage.setItem("phone", data.data[0].phone)
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
                    <input type="number" className="form-control" id="floatingOTP" placeholder="OTP"  {...register("otp")} required />
                    <label htmlFor="floatingPassword">OTP</label>
                </div>
                <input className="my-2 px-3 py-1 btn btn-primary" type="submit"/>
            </form>
        </section>
    );
}

export default PhoneValidation;