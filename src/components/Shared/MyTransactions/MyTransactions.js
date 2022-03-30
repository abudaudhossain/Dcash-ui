import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MyTransaction from "../MyTransaction/MyTransaction";


const transactions = ['Send', 'CashOut', 'Payment']

const MyTransactions = () => {
    return (
        <Container>
            <Row>
                {
                    transactions.map((transaction, index) => <Col key={index} xs={6} md={4}>
                        <MyTransaction transaction={transaction} />
                    </Col>)
                }
            </Row>
        </Container>
    );
}

export default MyTransactions;

