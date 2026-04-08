// import { masonryItems } from '../data/masonryData';
import Masonry from '../components/Masonry';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import '../App.css';
import './Projects.css';


function Projects() {
    const [show, setShow] = useState(false);
    const [activeProject, setActiveProject] = useState(null);

    const handleClose = () => setShow(false);
    const handleShow = (item) => { setActiveProject(item); setShow(true); }

    return (
        <Container className="">
            <Row className="mt-5">
                <Col xs={12}>
                    <h1 className="text-white text-center fs-1 shrikhand-regular my-5">My Projects</h1>
                </Col>
                <Col>
                    <div style={{ minHeight: '600px', position: 'relative', marginBottom: '10px'}}>
                        <Masonry
                            onItemClick={handleShow}
                        />
                    </div>
                </Col>
            </Row>
            <Modal show={show} fullscreen={true} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{activeProject?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel fade data-bs-theme="dark">
                        {activeProject?.carouselImgz.map((img, idx) => (
                            <Carousel.Item key={idx} className="d-flex justify-content-center">
                                <Image src={img} alt="Slide project screenshot image" className="carousel-img img-fluid rounded-4" />
                            </Carousel.Item>
                        ))}
                    </Carousel>
                    <section>
                        <h3>Description</h3>
                        <div>
                            <p>
                                {activeProject?.description}
                            </p>
                            </div>
                        {activeProject?.live && (
                            <div className="text-wrap">
                                View Live Site:  <a href={activeProject.live} target="_blank" rel="noopener noreferrer">
                                    {activeProject.live}
                                </a>
                            </div>
                        )}
                        <div className="text-wrap">Repository:  <a href={activeProject?.repo} target="_blank" rel="noopener noreferrer">{activeProject?.repo}
                        </a>
                        </div>
                    </section>
                </Modal.Body>
            </Modal>
        </Container>
    );
}

export default Projects;
