import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {testimonial} from "../data/index.js";
import FaqComponent from "../components/FaqComponent.jsx";

const TestimoniPage = () => {
    return (
        <div className={"testimonial-page"}>
            <div className={"testimonial"}>
                <Container>
                    <Row className={"mb-5"}>
                        <Col>
                            <h1 className={"text-center fw-bold animate__animated animate__fadeInUp animate__delay-1s"}>Semua Testimonial</h1>
                            <p className={"text-center animate__animated animate__fadeInUp animate__delay-1s"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, quia?</p>
                        </Col>
                    </Row>
                    <Row className={"row-cols-lg-3 row-cols-1"}>
                        {testimonial.map((data) => {
                            return (
                                <Col key={data.id} className={"mb-5"}>
                                    <p className="desc pt-3 ps-3 shadow-sm rounded-3">{data.desc}</p>
                                    <div className={"people"}>
                                        <img src={data.image} alt=""/>
                                        <div className={"people-desc"}>
                                            <h5 className={"mb-1"}>{data.name}</h5>
                                            <p className={"mb-1 fw-bold"}>{data.skill}</p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                    </Row>
                </Container>
                <FaqComponent></FaqComponent>
            </div>
        </div>
    );
};

export default TestimoniPage;