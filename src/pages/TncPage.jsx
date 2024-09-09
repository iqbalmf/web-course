import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import FaqComponent from "../components/FaqComponent.jsx";

const TncPage = () => {
    return (
        <div className={"tnc-page"}>
            <div className={"tnc"}>
                <Container>
                    <Row>
                        <Col>
                            <h1 className={"fw-bold text-center mb-2"}>Syarat & Ketentuan</h1>
                            <p className={"text-center"}>Lorem ipsum dolor sit amet.</p>
                        </Col>
                    </Row>
                    <Row className={"pt-5"}>
                        <Col>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam amet atque consequatur cumque delectus dolores dolorum ducimus, ea eveniet fuga hic illum inventore iusto labore nam optio provident quae quasi quidem rerum sapiente tenetur! Dicta dolor earum facere ipsam nobis nulla quae, quod quos, recusandae rem soluta ullam, vero?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"py-3"}>
                            <h4 className={"fw-bold"}>1. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque debitis dolores eaque, enim eos explicabo facere facilis fugit ipsum iure, libero magnam natus officia quae qui quod repellat similique temporibus totam? Deserunt doloremque eligendi nulla odio quo tempore ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laudantium maiores perspiciatis praesentium qui sunt tempora veritatis. Cum excepturi necessitatibus nihil officiis porro quis quisquam velit vero voluptate voluptatem. Aspernatur assumenda deleniti doloremque dolores, excepturi ipsam praesentium provident quibusdam ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae culpa eligendi est facilis fuga id iusto laudantium, minima minus nobis quidem repellat repellendus reprehenderit rerum soluta unde? Accusamus alias animi aut beatae cum debitis dolores doloribus dolorum explicabo impedit ipsa iure, nemo perferendis quia recusandae repellat sequi sint sit ullam veritatis. Adipisci, aspernatur, veniam. Accusamus animi aut error expedita soluta. Accusamus consectetur deleniti dolor eius harum ipsum iste, perspiciatis reprehenderit. Ab debitis ducimus esse modi mollitia ratione vel?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"py-3"}>
                            <h4 className={"fw-bold"}>2. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque debitis dolores eaque, enim eos explicabo facere facilis fugit ipsum iure, libero magnam natus officia quae qui quod repellat similique temporibus totam? Deserunt doloremque eligendi nulla odio quo tempore ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laudantium maiores perspiciatis praesentium qui sunt tempora veritatis. Cum excepturi necessitatibus nihil officiis porro quis quisquam velit vero voluptate voluptatem. Aspernatur assumenda deleniti doloremque dolores, excepturi ipsam praesentium provident quibusdam ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae culpa eligendi est facilis fuga id iusto laudantium, minima minus nobis quidem repellat repellendus reprehenderit rerum soluta unde? Accusamus alias animi aut beatae cum debitis dolores doloribus dolorum explicabo impedit ipsa iure, nemo perferendis quia recusandae repellat sequi sint sit ullam veritatis. Adipisci, aspernatur, veniam. Accusamus animi aut error expedita soluta. Accusamus consectetur deleniti dolor eius harum ipsum iste, perspiciatis reprehenderit. Ab debitis ducimus esse modi mollitia ratione vel?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col className={"py-3"}>
                            <h4 className={"fw-bold"}>3. Lorem</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, atque debitis dolores eaque, enim eos explicabo facere facilis fugit ipsum iure, libero magnam natus officia quae qui quod repellat similique temporibus totam? Deserunt doloremque eligendi nulla odio quo tempore ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus laudantium maiores perspiciatis praesentium qui sunt tempora veritatis. Cum excepturi necessitatibus nihil officiis porro quis quisquam velit vero voluptate voluptatem. Aspernatur assumenda deleniti doloremque dolores, excepturi ipsam praesentium provident quibusdam ut?</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad beatae culpa eligendi est facilis fuga id iusto laudantium, minima minus nobis quidem repellat repellendus reprehenderit rerum soluta unde? Accusamus alias animi aut beatae cum debitis dolores doloribus dolorum explicabo impedit ipsa iure, nemo perferendis quia recusandae repellat sequi sint sit ullam veritatis. Adipisci, aspernatur, veniam. Accusamus animi aut error expedita soluta. Accusamus consectetur deleniti dolor eius harum ipsum iste, perspiciatis reprehenderit. Ab debitis ducimus esse modi mollitia ratione vel?</p>
                        </Col>
                    </Row>
                </Container>
                <FaqComponent></FaqComponent>
            </div>
        </div>
    );
};

export default TncPage;