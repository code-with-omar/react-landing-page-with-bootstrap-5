
import { Col, Container, Row } from 'react-bootstrap';
import './Hero.css'
import HeroLeft from './HeroLeft/HeroLeft';
import HeroRight from './HeroRight/HeroRight';
const Hero = () => {
    const heroLeftAllDocuments = {
        title: 'Healthy & tasty food',
        suggest:'Achieve Optimal',
        details: ' With Our Nutritious Meal Plans',
        description: 'Discover a world of delicious salad at our online salad paradise. salad meals are ready to eat in a minutes so save time energy.'
    }
    return (
        <section>
            <Container>
                <Row className='mt-5'>
                    <Col md={6}>
                        <section>
                            <HeroLeft data={heroLeftAllDocuments}></HeroLeft>
                        </section>
                    </Col>
                    <Col md={6}>
                       <section>
                            <HeroRight></HeroRight>
                       </section>
                    </Col>
                </Row>
            </Container>
        </section>

    );
};

export default Hero;