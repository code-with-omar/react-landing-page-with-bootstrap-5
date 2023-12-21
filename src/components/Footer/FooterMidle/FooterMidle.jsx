import { Button, Col, Container, Image, Row } from 'react-bootstrap';
import logoImage from '../../../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './FooterMidle.css'
const FooterMidle = () => {
    return (
        <section className='footer-midle-wrap'>
            <Container>
                <Row>
                    <Col md={4}>
                        <Image src={logoImage} fluid></Image>
                        <p className='footer-midle-text'>Lorem ipsum dolor sit amet, consec tetur adipisicing elit, sed do eiusmod tempor incididuntut consec tetur adipisicing elit,Lorem ipsum dolor sit amet.</p>
                        <h3 className='footer-midle-titles'>
                            Follow us
                        </h3>
                        <div className='d-flex footer-social-icon'>
                            <a href="" className='social-icon me-2 facebook-bg'>
                                <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                            </a>
                            <a href="" className='social-icon mx-2'>
                                <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                            </a>
                            <a href="" className='social-icon mx-2'>
                                <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon>
                            </a>
                        </div>
                    </Col>
                    <Col md={4}>
                        <h3 className='footer-midle-titles link-before '>
                            Useful Links
                        </h3>
                        <Row className='mt-5'>
                            <Col>
                                <ul className='links'>
                                    <li><a href="#home">Home</a></li>
                                    <li><a href="#service">Service</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                    <li><a href="#our-service">Our Services</a></li>
                                    <li><a href="#contact-us">Contact Us</a></li>
                                </ul>
                            </Col>
                            <Col >
                                <ul className='links'>
                                    <li><a href="#about">About</a></li>
                                    <li><a href="#portfolio">Portfolio</a></li>
                                    <li><a href="#about-us">About Us</a></li>
                                    <li><a href="#expert-team">Expert Team</a></li>
                                    <li><a href="#latest-news">Latest News</a></li>
                                </ul>
                            </Col>
                        </Row>

                    </Col>
                    <Col md={4} className='subscribe-wrap'>
                        <h3 className='footer-midle-titles link-before '>
                            Subscribe
                        </h3>
                        <p>Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                        <div className='subscribe-form d-flex flex-nowrap'>
                            <form action="">
                                <input type="email" name="" id="" placeholder='Email' style={{margin:'0'}}/>
                               <Button className='subscribe-btn'>Subscribe</Button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FooterMidle;