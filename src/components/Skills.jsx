import { SiSequelize } from "react-icons/si";
import { SiJsonwebtokens } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { FaCss3Alt } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { IconContext } from "react-icons";
import Card from 'react-bootstrap/Card';
import './Skills.css';


function Skills() {

    return (

        <IconContext.Provider value={{ color: "black", size: "2rem" }}>
            <Row>
                <Col xs={12}>
                    <h3 className="mb-3">Frontend</h3>
                </Col>
                <Col className="d-flex flex-wrap gap-2">
                    {/* <Card style={{ width: 'fit-content' , height: 'fit-content' }}> */}
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><FaReact /></Card.Title>
                            <Card.Text>
                                React
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><SiJavascript /></Card.Title>
                            <Card.Text>
                                JavaScript
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><FaBootstrap /></Card.Title>
                            <Card.Text>
                                Bootstrap
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><FaHtml5 /></Card.Title>
                            <Card.Text>
                                HTML5
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><FaCss3Alt /></Card.Title>
                            <Card.Text>
                                CSS3
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row className="mt-5">
                <Col xs={12}>
                    <h3 className="mb-3">Backend</h3>
                </Col>
                <Col className="d-flex flex-wrap gap-2">
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><FaNode /></Card.Title>
                            <Card.Text>
                                Node.js
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><SiExpress /></Card.Title>
                            <Card.Text>
                                Express.js
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><SiMysql /></Card.Title>
                            <Card.Text>
                                MySQL
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><SiSequelize /></Card.Title>
                            <Card.Text>
                                Sequelize<br />ORM
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="skill-card">
                        <Card.Body className="p-1 text-center">
                            <Card.Title><SiJsonwebtokens /></Card.Title>
                            <Card.Text>
                                JSON<br />Web Tokens
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <hr />
            <Row className="mt-4">
                <Col xs={12}>
                    <h3 className="mb-3">Tools</h3>
                </Col>
                <Col>
                    <p style={{ color: "black" }}>Git, GitHub (collaboration), VS Code, npm, Vite, Postman, DBeaver, Render.</p>
                </Col>
            </Row>
            <hr />
        </IconContext.Provider>
    );
}

export default Skills;


