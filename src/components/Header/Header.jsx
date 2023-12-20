import logo from '../../assets/logo.png'
import Image from 'react-bootstrap/Image';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';


const Header = () => {
    return (
        <Navbar expand="lg" className="bg-transparent shadow-sm navbar navbar-expand-lg navbar-light">
            <Container>
                <Navbar.Brand href="#home">
                    <Image src={logo} fluid></Image>

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto text-center d-flex justify-content-center  navbar-nav">
                        <Nav.Link href="#home" className='text-secondary fw-bold nav-link me-5'>Home</Nav.Link>

                        <Nav.Link href="#About-us" className='text-secondary fw-bold nav-link me-5'>About US</Nav.Link>
                        <Nav.Link href="#Testimonials" className='text-secondary fw-bold nav-link me-5'>Testimonials</Nav.Link>
                        <Nav.Link href="#Contacts" className='text-secondary fw-bold nav-link me-5'>Contacts</Nav.Link>
                        <Button variant="danger">Login</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;