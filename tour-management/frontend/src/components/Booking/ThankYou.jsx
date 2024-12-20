import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
// import '../style/thank-you.css'

const ThankYou = () => {
    return (
        <>
            <section>
                <Container>
                    <Row>
                        <Col lg='12' className="pt-4 text-center">
                            <div className="thank__you">
                                <span className="fs-1 " ><i className="ri-checkbox-circle-line text-success" ></i></span>
                                <h1 className="mb-3 fw-semibold fst-italic">Thank You</h1>
                                <h3 className="mb-4">Your tour is booked.</h3>

                                <Button className=" btn bg-warning  primary__btn w-25" >
                                    <Link  className="text-white" style={{textDecoration:'none'}} to="/home">Back to Home</Link>
                                </Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default ThankYou;
