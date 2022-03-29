import React from "react";
import { Container } from "react-bootstrap";


function Home() {
    const a = 1;
    const b = 3;
    return (
        <>
            <Container className="h-100">

                <h1>Home{a + b}</h1>
            </Container>
        </>
    );
}

export default Home;