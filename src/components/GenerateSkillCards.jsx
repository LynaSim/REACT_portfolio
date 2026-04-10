import React from 'react';
import { Card } from 'react-bootstrap';
import { FaNpm, FaGitSquare, FaGithub } from "react-icons/fa";
import { SiVite, SiPostman, SiDbeaver, SiRender } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

// For each skill in the skills array, return a card component with the Icon component in the header and the name in the text
function GenerateSkillCards() {
const skills = [
    { name: 'npm', icon: FaNpm , id: 'npm'},
    { name: 'Vite', icon: SiVite, id: 'vite' },
    { name: 'Git', icon: FaGitSquare, id: 'git' },
    { name: 'GitHub', icon: FaGithub, id: 'github' },
    { name: 'Postman', icon: SiPostman, id: 'postman' },
    { name: 'Dbeaver', icon: SiDbeaver, id: 'dbeaver' },
    { name: 'VS Code', icon: VscVscode, id: 'vscode' },
    { name: 'Render', icon: SiRender, id: 'render' }
];

const skillCards = skills.map(skill => 
                        <Card key={skill.id} className="skill-card">
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
