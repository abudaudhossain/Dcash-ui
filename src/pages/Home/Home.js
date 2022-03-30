import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Home/Banner/Banner";
import CountryCurrencyRate from "../../components/Home/CountryCurrencyRate/CountryCurrencyRate";
import MyTransactions from "../../components/Shared/MyTransactions/MyTransactions";

import './home.css'

function Home() {

    return (
        <section className="">
            <Banner />
            <Container className="trans p-5">
                <MyTransactions></MyTransactions>
            </Container>
            <CountryCurrencyRate />
        </section>
    );
}

export default Home;