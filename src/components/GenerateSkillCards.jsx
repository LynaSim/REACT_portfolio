import React from 'react';
import { Card } from 'react-bootstrap';
import { FaNpm, FaGitSquare, FaGithub } from "react-icons/fa";
import { SiVite, SiPostman, SiDbeaver, SiRender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// For each skill in the skills array, return a card component with the Icon component in the header and the name in the text
function GenerateSkillCards() {
const skills = [
    { name: 'npm', icon: FaNpm },
    { name: 'Vite', icon: SiVite },
    { name: 'Git', icon: FaGitSquare },
    { name: 'GitHub', icon: FaGithub },
    { name: 'Postman', icon: SiPostman },
    { name: 'Dbeaver', icon: SiDbeaver },
    { name: 'VS Code', icon: VscVscode },
    { name: 'Render', icon: SiRender }
];

const skillCards = skills.map(skill => 
                        <Card className="skill-card">
                            <Card.Body className="p-1 text-center">
                                <Card.Title><skill.icon /></Card.Title>
                                <Card.Text>
                                    {skill.name}
                                </Card.Text>
                            </Card.Body>
                        </Card>
);

return skillCards;
}

export default GenerateSkillCards;
