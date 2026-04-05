import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <Container>
        <Row>
            <Col>
                <footer className="border-top text-end bg-transparent text-white mt-5">
                    © 2026 React Portfolio. Made by Lyna Sim. All Rights Reserved.
                </footer>
            </Col>
        </Row>
        </Container>
    );
}

export default Footer;