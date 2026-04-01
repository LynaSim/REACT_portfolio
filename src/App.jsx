import { Container, Row, Col } from 'react-bootstrap';
// import ProjectCard from './components/ProjectCard';
import { useState } from 'react'
import './App.css';
import { masonryItems } from './data/masonryData';
import Masonry from './components/Masonry';

function App() {
    const [count, setCount] = useState(0)

    return (
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
                    <Row className="mt-5">
                        <Col>
                            <div style={{ minHeight: '600px', position: 'relative', marginBottom: '50px' }}>
                                <Masonry
                                    items={masonryItems}
                                    ease="power3.out"
                                    duration={0.6}
                                    stagger={0.05}
                                    animateFrom="bottom"
                                    scaleOnHover
                                    hoverScale={0.95}
                                    blurToFocus
                                    colorShiftOnHover={false}
                                />
                            </div>
                        </Col>
                    </Row>
        </Container>
    );
}

export default App
