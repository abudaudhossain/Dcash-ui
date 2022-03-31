import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Banner from "../../components/Home/Banner/Banner";
import CountryCurrencyRate from "../../components/Home/CountryCurrencyRate/CountryCurrencyRate";

import './home.css'

function Home() {
    const deviceToken = localStorage.getItem("deviceToken");
    if (!deviceToken) {
        localStorage.setItem("deviceToken", "DCash1234576")
    }

    return (
        <section className="">
            <Banner />
            <Container className="trans p-5">
                <Outlet />
            </Container>
            <CountryCurrencyRate />
        </section>
    );
}

export default Home;