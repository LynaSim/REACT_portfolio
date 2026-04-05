// import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';



function Navigation() {
        const [isOpen, setOpen] = useState(false)

    return (

        <Container>
            <Row>
                <Col className="d-flex justify-content-center">
                    <Hamburger
                        color="white"
                        rounded
                        label="Show menu"
                        toggled={isOpen} toggle={setOpen}
                    />
                    {isOpen && (
                        <div><Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                            </Nav></div>
                    )}
                </Col>
            </Row>
        </Container>

        // <Navbar bg="dark" variant="dark" expand="lg" className="fixed-top">
        //     <Container className="">
        //         <Navbar.Brand href="/"></Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" className="rounded-5 border border-2" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="ms-auto">
        //                 <Nav.Link as={Link} to="/">Home</Nav.Link>
        //                 <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        // </Navbar>
    );
}

export default Navigation;