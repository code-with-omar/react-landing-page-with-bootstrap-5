
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './FooterTop.css';
import { Col, Container, Row } from 'react-bootstrap';

const FooterTop = () => {
    const data = [
        { name: 'Find us', icon: faLocationDot, address: '1010 Avenue, sw 54321, chandigarh' },
        { name: 'Call us', icon: faPhone, address: '9876543210' },
        { name: 'Mail us', icon: faEnvelope, address: 'mail@info.com' },
    ];

    return (
        <section className='footer-top-wrap'>
            <Container>
                <Row>
                    {data.map((item, index) => (
                        <Col key={index} md={4}>
                            <div className='d-flex  justify-content-center '>
                                <FontAwesomeIcon icon={item.icon} className='w-25 footer-top-icon' />
                                <div className="footer-top-details">
                                    <h4>{item.name}</h4>
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                    <hr className='hr'/>
                </Row>
            </Container>
        </section>
    );
};

export default FooterTop;
