import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import '../App.css';

function Home() {
    const [count, setCount] = useState(0);

    return(
<Container className="mt-5">
                    <Row>
                        <Col>
                            <div className="text-white text-center">
                                <h1 className="h1-myname">Lyna Sim</h1>
                                <h1>Full Stack Web Developer</h1>
                                <button
                                    className="counter"
                                    onClick={() => setCount((count) => count + 1)}>
                                    Count is {count}
                                </button>
                            </div>
                        </Col>
                    </Row>
        </Container>
    );
}

export default Home;
