import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import '../App.css';
import HomeAccordion from '../components/HomeAccordion';

function Home() {
    const [count, setCount] = useState(0);

    return(
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
        </Container>
    );
}

export default Home;
