import React from "react";
import { Container } from "react-bootstrap";
import MyTransactions from "../../Shared/MyTransactions/MyTransactions";

const Banner = () => {

    return (
        <Container className="p-5">
            <MyTransactions />
        </Container>
    );
}

export default Banner;