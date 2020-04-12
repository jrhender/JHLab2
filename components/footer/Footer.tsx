import styles from './Footer.module.css';
//import twitterLogo from './../images/Twitter_Logo_White_On_Image.svg';

const Footer = () => {
    return (
        <div className={styles.AppFooter}>
            <a href="https://twitter.com/JohnRTHenderson" className={styles.twitterLogo}>
                <img src='footer/Twitter_Logo_White_On_Blue.svg' alt='Twitter logo' />
            </a>
            <a href="https://www.linkedin.com/in/jhend/" className={styles.linkedinLogo}>
                <img src='footer/In-2CRev-28px-R.png' alt='LinkedIn logo'/>
            </a>
        </div>
    )
};

export default Footer;