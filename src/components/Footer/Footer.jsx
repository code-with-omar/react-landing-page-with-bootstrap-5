import './Footer.css'
import FooterBottom from './FooterBottom/FooterBottom.jsx';
import FooterMidle from './FooterMidle/FooterMidle.jsx';
import FooterTop from './FooterTop/FooterTop.jsx';

const Footer = () => {
    return (
        <footer>
            <FooterTop></FooterTop>
            <FooterMidle></FooterMidle>
            <FooterBottom></FooterBottom>
        </footer>


    );
};

export default Footer;