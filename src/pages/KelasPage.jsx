import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {semuaKelas} from "../data/index.js";
import FaqComponent from "../components/FaqComponent.jsx";

const KelasPage = () => {
    return (
        <div className={"kelas-page"}>
            <div className={"kelas min-vh-100"}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={"fw-bold text-center animate__animated animate__fadeInUp animate__delay-1s"}>Semua Kelas</h1>
                            <p className={"text-center animate__animated animate__fadeInUp animate__delay-1s"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Laborum, perferendis!</p>
                        </Col>
                    </Row>
                    <Row>
                        {semuaKelas.map((kelas => {
                            return <Col key={kelas.id} className={"shadow"} data-aos={"fade-up"} data-aos-duration={"1000"} data-aos-delay={kelas.delay}>
                                <img src={kelas.image} alt="unsplash.com" className={"w-100 mb-5 rounded-top"}/>
                                <div className={"star mb-2 px-3"}>
                                    <i className={kelas.star1}></i>
                                    <i className={kelas.star2}></i>
                                    <i className={kelas.star3}></i>
                                    <i className={kelas.star4}></i>
                                    <i className={kelas.star5}></i>
                                </div>
                                <h5 className={"mb-5 px-3"}>{kelas.title}</h5>
                                <div className={"price d-flex justify-content-between align-items-center px-3 pb-3"}>
                                    <p className={"m-0 text-primary fw-bold"}>{kelas.price}</p>
                                    <button className={"btn btn-danger rounded-1"}>{kelas.buy}</button>
                                </div>
                            </Col>
                        }))}
                    </Row>
                </Container>
            </div>
            <FaqComponent></FaqComponent>
        </div>
    );
};

export default KelasPage;