import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { Divide as Hamburger } from 'hamburger-react';

import HomeAccordion from '../components/HomeAccordion';
import Footer from '../components/Footer';
import '../App.css';

function Home() {
    const [count, setCount] = useState(0);
    const [isOpen, setOpen] = useState(false)

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <header className="text-white text-center">
                        <h1 className="h1-myname">Lyna Sim</h1>
                        <h1>Full Stack Web Developer</h1>
                        <button
                            className="counter"
                            onClick={() => setCount((count) => count + 1)}>
                            Count is {count}
                        </button>
                    </header>
                </Col>
            </Row>
            <Row>
                <Col>
                    <HomeAccordion />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Link to="https://github.com/LynaSim" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare style={{ fontSize: '3rem', color: 'white' }} />
                    </Link>
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <FaLinkedin style={{ fontSize: '3rem', color: 'white' }} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <FaEnvelope style={{ fontSize: '2.5rem', color: 'white' }} />
                </Col>
            </Row>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Hamburger
                        color="white"
                        rounded
                        label="Show menu"
                        toggled={isOpen} toggle={setOpen}
                    />
                    {isOpen && (
                        <div>It works!</div>
                    )}
                </Col>
            </Row>

            <Row>
                <Col>
                    <Footer />
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
