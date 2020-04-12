import Link from 'next/link';
import Flask from '../flask/Flask';
import styles from './Header.module.css'

const Header = () => (
  <div className={styles.AppHeader}>
      <Link href="/">
        <div className={styles.LogoAndName}>
          <h1>JH Code Lab</h1>
          <div>
            <Flask />
          </div>
        </div>
      </Link>
  </div>
);

export default Header;