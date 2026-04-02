import { masonryItems } from '../data/masonryData';
import Masonry from '../components/Masonry';
import { Container, Row, Col, Modal, ModalFooter } from 'react-bootstrap';
import '../App.css';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';


function Projects() {
    const [show, setShow] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (item) => { setActiveProject(item); setShow(true); }

    return (
        <Container className="">
            <Row className="mt-5">
                <Col xs={12}>
                    <h1 className="text-white fs-1 shrikhand-regular">My Projects</h1>
                </Col>
                <Col>
                    <div style={{ minHeight: '600px', position: 'relative', marginBottom: '50px' }}>
                        <Masonry
                            onItemClick={handleShow}
                        // items={masonryItems}
                        // ease="power3.out"
                        // duration={0.6}
                        // stagger={0.05}
                        // animateFrom="random"
                        // scaleOnHover
                        // hoverScale={0.90}
                        // blurToFocus
                        // colorShiftOnHover={true}
                        />
                    </div>
                </Col>
            </Row>
            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{activeProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade className="bg-dark">
                        {activeProject?.carouselImgz.map((img, idx) => (
                            <Carousel.Item key={idx}>
                                <img src={img} alt="Slide project screenshot image" className="img-fluid"/>
                            </Carousel.Item>
                        ))}
                </Carousel>
                <section>
                <h3>Description</h3>
                <p>{activeProject?.description}</p>
                </section>
                </Modal.Body>
                <ModalFooter>Footer with links to live site, and link to repository</ModalFooter>
            </Modal>
        </Container>
    );
}

export default Projects;
