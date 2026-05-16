import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './HomeAccordion.css';
import Skills from './Skills';
import Overview from './Overview';


// const PINK = 'rgba(255, 192, 203, 0.6)';
// const BLUE = 'rgba(0, 0, 255, 0.6)';
const UNDERLINE = 'underline';
const NONE = 'none';


function ContextAwareToggle({ children, eventKey, callback }) {
  const { activeEventKey } = useContext(AccordionContext);

  const decoratedOnClick = useAccordionButton(
    eventKey,
    () => callback && callback(eventKey),
  );

  const isCurrentEventKey = activeEventKey === eventKey;

  return (
    <button
      type="button"
      className="border border-0 bg-transparent shrikhand-regular fs-1 text-white zoom"
      // style={{ backgroundColor: isCurrentEventKey ? PINK : BLUE }}
      style={{ textDecoration: isCurrentEventKey ? UNDERLINE : NONE }}
      onClick={decoratedOnClick}
    >
      {children}
    </button>
  );
}

function HomeAccordion() {
  return (
    <Accordion defaultActiveKey="">
      <Card className="accordion-section border border-0 bg-transparent text-white mt-5">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="0" className="zoom">Overview</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Overview />
        </Accordion.Collapse>
      </Card>
      <Card className="accordion-section border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="1">Tech Stack</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="border border-0 bg-transparent text-center">
            <Skills />
          </Card.Body>
        </Accordion.Collapse>
      </Card>
      {/* <Card className="border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="2">Projects</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="border border-0 bg-transparent text-center">
          <Nav.Link as={Link} to="/projects">This new link will take you to my projects.</Nav.Link>
          </Card.Body>
        </Accordion.Collapse>
      </Card> */}
      <Card className="border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent shrikhand-regular fs-1">
         <button type="button"
      className="border border-0 bg-transparent shrikhand-regular fs-1 text-white zoom">
        <Nav.Link as={Link} to="/projects" className="zoom">Projects</Nav.Link></button>
        </Card.Header>
      </Card>
    </Accordion>
  );
}

export default HomeAccordion;