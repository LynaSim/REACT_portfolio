// import { Container, Row, Col } from 'react-bootstrap';
// import ProjectCard from './components/ProjectCard';
// import { masonryItems } from './data/masonryData';
// import Masonry from './components/Masonry';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Navigation from './components/Navbar';
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
