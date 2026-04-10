// import { Container, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { FaGithubSquare, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HomeAccordion from '../components/HomeAccordion';
import { IconContext } from "react-icons";
import './Home.css';


function Home() {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <header className="text-white text-center">
                        <h1 className="h1-myname">Lyna Sim</h1>
                        <h1>Full Stack Web Developer</h1>
                    </header>
                </Col>
            </Row>
            <Row>
                <Col sm={7} className="mx-auto">
                    <HomeAccordion />
                </Col>
            </Row>
            <IconContext.Provider value={{ className: "zoom", color: "white", size: "4rem" }}>
            <Row className="my-2">
                <Col className="d-flex justify-content-center">
                    <Link to="https://github.com/LynaSim" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                        <FaGithubSquare />
                    </Link>
                </Col>
            </Row>
            <Row className="my-2">
                <Col className="d-flex justify-content-center">
                <Link to="https://www.linkedin.com/in/s-lyna-dev/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                    </ Link>
                </Col>
            </Row>
            <Row className="mt-2 mb-5">
                <Col className="d-flex justify-content-center">
                <Link to="mailto:s.lyna.dev@gmail.com" aria-label="Email" target="_blank" rel="noopener noreferrer">
                    <FaEnvelope />
                </Link>
                </Col>
            </Row>
            </IconContext.Provider>
        </Container>
    );
}

export default Home;
