import { Card, Button, Col } from 'react-bootstrap';
import './ProjectCard.css'

function ProjectCard() {
  return (
    <Col md={4} className="mb-4">
      <Card className="project-card text-white border-light">
        <Card.Body>
          <Card.Title>Vite Portfolio</Card.Title>
          <Card.Text>
            A sleek portfolio with an animated gradient background.
          </Card.Text>
          <Button variant="primary">See it live</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default ProjectCard;