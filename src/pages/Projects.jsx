import { masonryItems } from '../data/masonryData';
import Masonry from '../components/Masonry';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

function Projects() {
    return (
        <Container className="">
            <Row className="mt-5">
                <Col xs={12}>
                    <h1 className="text-white fs-1 shrikhand-regular">My Projects</h1>
                </Col>
                <Col>
                    <div style={{ minHeight: '600px', position: 'relative', marginBottom: '50px' }}>
                        <Masonry
                            items={masonryItems}
                            ease="power3.out"
                            duration={0.6}
                            stagger={0.05}
                            animateFrom="random"
                            scaleOnHover
                            hoverScale={0.90}
                            blurToFocus
                            colorShiftOnHover={false}
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Projects;
