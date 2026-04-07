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

function Skills() {

    return (
        <>
            <Row>
                <Col xs={12}>
                    <h3>Frontend</h3>
                </Col>
                <Col>
                    <FaReact />
                    <SiJavascript />
                    <FaBootstrap />
                    <FaHtml5 />
                    <FaCss3Alt />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Backend</h3>
                </Col>
                <Col>
                    <FaNode />
                    <SiExpress />
                    <SiMysql />
                    <SiSequelize />
                    <SiJsonwebtokens />
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <h3>Industry Standard Tools</h3>
                </Col>
                <Col>
                    <p>Git, GitHub (collaboration), VS Code, npm, Vite, Postman, DBeaver, Render.</p>
                </Col>
            </Row>
        </>
    );
}

export default Skills;


