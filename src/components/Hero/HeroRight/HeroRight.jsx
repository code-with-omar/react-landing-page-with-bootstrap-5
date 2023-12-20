import heroRightImage from '../../../assets/headerRght.png'
import './HeroRight.css'
const HeroRight = () => {
    return (
        <div className='right-hero-section imageContainer d-flex justify-content-end align-items-center shadow-sm rounded'>
            <img src={heroRightImage} alt="" />
        </div>

    );
};

export default HeroRight;