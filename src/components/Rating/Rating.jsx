import { Col, Container, Row } from "react-bootstrap";
import cookImage from '../../assets/cook.png';
import deliveryImage from '../../assets/delivery.png';
import thumbsImage from '../../assets/thumbs.png'
import './Rating.css';

const Rating = () => {
    const data = [
        { name: 'Delicious Food', details: 'Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!', img: cookImage },
        { name: 'Fast Delivery', details: 'Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!', img: deliveryImage},
        { name: 'Feedback', details: 'Delicious FoodLorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, non!', img: thumbsImage },
    ];

    return (
        <section className="mt-5 pt-3">
            <Container>
                <Row>
                    {data.map(e => (
                        <Col lg={4} md={6} key={e.name}>
                            <div className="d-flex justify-content-center align-items-center rating">
                                <img src={e.img} alt={e.name} className="img-fluid"/>
                                <div>
                                    <h5>{e.name}</h5>
                                    <p className="text-secondary text-justify">{e.details}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default Rating;
