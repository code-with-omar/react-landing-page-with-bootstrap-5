import { Button } from 'react-bootstrap';
import './HeroLeft.css'

const HeroLeft = (props) => {
    console.log(props)
    return (
        <div className='hero-left-wrapper'>
            <span className='hero-left-title'>
                {props.data.title}
            </span>
            <h1 className='hero-left-details'>
                <span className='span'>{props.data.suggest}</span>
                {props.data.details}
            </h1>
            <p className='hero-left-description text-secondary'>
                {props.data.description}
            </p>
            <Button variant="danger" className=''>Order Food</Button>
            <Button variant="outline-danger" className='btn-contact'>contact us</Button>
        </div>
    );
};

export default HeroLeft;