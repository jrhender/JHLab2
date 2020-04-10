import Link from 'next/link';
import Flask from '../Flask';
import styles from './Header.module.css'

const Header = () => (
  <div className={styles.AppHeader}>
    <div id="LogoAndName">
        {/* <img src={jhFace} alt="logo" /> */}
        <h1>JH Code Lab</h1>
        <Flask/>
    </div>
    <nav className={styles.siteNavigation}>
        <ul>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>
        </ul>
    </nav>
  </div>
);

export default Header;