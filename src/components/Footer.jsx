import { Container, Row, Col } from 'react-bootstrap';


function Footer() {
    return (
        <Row>
            <Col xs={12} className="px-5">
                <footer className="border-top text-end bg-transparent text-white mt-auto">
                    © 2026 React Portfolio. Made by Lyna Sim. All Rights Reserved.
                </footer>
            </Col>
        </Row>
    );
}

export default Footer;