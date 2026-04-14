import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import HomeAccordion from '../components/HomeAccordion';
import LinksIcons from '../components/LinksIcons';
import Header from '../components/Header';
import './Home.css';



function Home() {

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <Header />
                </Col>
            </Row>
            <Row>
                <Col sm={7} className="mx-auto">
                    <HomeAccordion />
                </Col>
            </Row>
            <LinksIcons />
        </Container>
    );
}

export default Home;
