// import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Divide as Hamburger } from 'hamburger-react';
import { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { SiDevbox } from "react-icons/si";
import { TbHome2 } from "react-icons/tb";
import { BiHomeHeart } from "react-icons/bi";
import { IconContext } from "react-icons";


function Navigation() {
        const [isOpen, setOpen] = useState(false)

    return (

        <IconContext.Provider value={{ color: "white", size: "2.5rem", className: "zoom"}}>
                <div className="d-flex justify-content-center">
                    <Hamburger
                        size={48}
                        color="white"
                        rounded
                        label="Show menu"
                        toggled={isOpen} toggle={setOpen}
                    />
                    {isOpen && (

                            <Nav>
                            <Nav.Link as={Link} to="/"><BiHomeHeart style={{ fontSize: '1.7rem', color: 'white' }} /></Nav.Link>
                            <Nav.Link as={Link} to="/projects"><SiDevbox style={{ fontSize: '1.7rem', color: 'white' }}/></Nav.Link>
                            </Nav>

                    )}
                </div>
        </IconContext.Provider>


    );
}

export default Navigation;
