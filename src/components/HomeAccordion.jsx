import { useContext } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
// import useAccordionButton from 'react-bootstrap/useAccordionButton';
import { useAccordionButton } from 'react-bootstrap/AccordionButton'
import Card from 'react-bootstrap/Card';
import './HomeAccordion.css';

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
      className="border border-0 bg-transparent shrikhand-regular fs-3 text-white"
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
    <Accordion defaultActiveKey="0">
      <Card className="border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="0">Overview</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="border border-0 bg-transparent">Hello! I'm Lyna and I've officially started my journey as a full stack web developer.</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="1">Stack</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body className="border border-0 bg-transparent">Hello! I am another body</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="border border-0 bg-transparent text-white">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="2">Projects</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body className="border border-0 bg-transparent">Hello! I am another body</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default HomeAccordion;