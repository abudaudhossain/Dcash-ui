import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import MyTransaction from "../MyTransaction/MyTransaction";


const transactions = ['Send', 'CashOut', 'Payment']

const MyTransactions = () => {

    return (
        <Container>
            <Row>
                {
                    transactions.map((transaction, index) => <Col key={index} xs={6} md={4}>
                        <Link to={`/transaction?transaction=${transaction}`}>
                            <MyTransaction transaction={transaction} />
                        </Link>
                    </Col>)
                }
            </Row>
        </Container>
    );
}

export default MyTransactions;

