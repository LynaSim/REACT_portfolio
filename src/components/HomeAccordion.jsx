import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion';
import AccordionContext from 'react-bootstrap/AccordionContext';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import './HomeAccordion.css';
import Skills from './Skills';


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
      <Card className="border border-0 bg-transparent text-white mt-5">
        <Card.Header className="d-flex justify-content-center border border-0 bg-transparent">
          <ContextAwareToggle eventKey="0" className="zoom">Overview</ContextAwareToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body className="border border-0 bg-transparent text-center">Hello! I'm Lyna, and I've just concluded a 12-week web development bootcamp, officially starting my path as a full-stack developer!<br /><br />
            My journey began in the publishing industry as an XML content specialist. I managed complex XML data structures and prepared them for the production pipeline. With authors, I liaised closely to ensure their intent was translated accurately. Another very enjoyable aspect of my work was collaborating with the development team to ensure the data was compliant with standards and fit for transformation.<br /> It is then that I discovered web development and, while I enjoyed the rigor of XML structures, I became fascinated with the process of turning raw data into interactive user experiences.<br /><br />
            Years later, after time dedicated to my family and a very rewarding chapter in SEN education, I have returned to my technical roots by completing this intensive but thoroughly enjoyable 12-week full-stack bootcamp.<br /><br />
            I cannot wait for opportunities to combine my diverse skills and experiences into building applications I feel passionate about!</Card.Body>
        </Accordion.Collapse>
      </Card>
      <Card className="border border-0 bg-transparent text-white">
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