import styles from './Footer.module.css';
//import twitterLogo from './../images/Twitter_Logo_White_On_Image.svg';

const Footer = () => {
    return (
        <div className={styles.AppFooter}>
            <a href="https://www.linkedin.com/in/jhend/" className={styles.linkedinLogo}>
                <img src='/In-2CRev-28px-R.png' alt='LinkedIn logo'/>
            </a>
            <a href="https://bitbucket.org/jrhender/" className={styles.bitbucketLogo}>
                <img
                    src='/bitbucket-mark-gradient-white.svg'
                    title='BitBucket (https://atlassian.design/guidelines/brand/logos)'
                    alt='link to bitbucket profile'/>
            </a>
            <a href="https://github.com/jrhender" className={styles.githubLogo}>
                <img
                    src='/GitHub-Mark-Light-32px.png'
                    title='GitHub (https://github.com/logos)'
                    alt='link to github profile'/>
            </a>
            {/* <a href="https://twitter.com/MrJohnHenderson" className={styles.twitterLogo}>
                <img src='/Twitter_Logo_White_On_Blue.svg' alt='Twitter logo' />
            </a> */}
            {/* <a href="https://www.hackerrank.com/JohnHenderson" className={styles.hackerRankLogo}>
                <img
                    src='https://upload.wikimedia.org/wikipedia/commons/6/65/HackerRank_logo.png'
                    title='HackerRank / CC BY (https://creativecommons.org/licenses/by/4.0)'
                    alt='HackerRank logo'/>
            </a> */}
        </div>
    )
};

export default Footer;