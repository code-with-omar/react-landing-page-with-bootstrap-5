import { Col, Container, Row } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import foodImage from '../../assets/food.png'
import './FitnessGoal.css'
const FitnessGoal = () => {
    return (
        <section className='fitness-goal-wrap'>
            <Container>
                <Row>
                    <Col md={6}>
                        <img src={foodImage} alt="" />
                    </Col>
                    <Col md={6}>
                        <div className="fitness-goal-details ">
                            <h1 className=''>React fitness goals with delectable, nutritous salad tailored for you</h1>
                            <p  className='text-secondary text-secondary '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis?</p >
                            <p  className='text-secondary'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste quibusdam sed aut sint voluptatem laudantium reiciendis cumque dolores culpa nobis? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus labore voluptatum dolores modi cupiditate quaerat optio quas dicta! Sequi, facere.</p >

                            <Button variant="danger" className=''>Order Food</Button>
                            <Button variant="outline-danger" className='btn-contact'>contact us</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default FitnessGoal;