import { SiSequelize, SiJsonwebtokens, SiMysql, SiExpress, SiJavascript  } from "react-icons/si";
import { FaNode, FaCss3Alt, FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { Row, Col } from 'react-bootstrap';
import { IconContext } from "react-icons";
import Card from 'react-bootstrap/Card';
import './Skills.css';
import GenerateSkillCards from "./GenerateSkillCards";


function Skills() {

    return (

        <IconContext.Provider value={{ color: "black", size: "2rem" }}>
            <Row>
                <Col xs={12}>
                    <h3 className="mb-3">Frontend</h3>
                </Col>
                <Col className="d-flex flex-wrap justify-content-center gap-3">
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
                <Col className="d-flex flex-wrap justify-content-center gap-3">
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
                <Col className="d-flex flex-wrap justify-content-center gap-3">
                    <GenerateSkillCards />
                    {/* <p style={{ color: "white" }}>Git, GitHub (collaboration), VS Code, npm, Vite, Postman, DBeaver, Render.</p> */}
                </Col>
            </Row>
            <hr />
        </IconContext.Provider>
    );
}

export default Skills;


