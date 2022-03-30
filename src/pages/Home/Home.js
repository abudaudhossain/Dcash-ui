import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../../components/Home/Banner/Banner";


function Home() {
    const a = 1;
    const b = 3;
    return (
        <>
            <Container className="H-100">
                <Banner />
            </Container>
        </>
    );
}

export default Home;