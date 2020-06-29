import Link from 'next/link';
import styles from './Header_oat.module.css'

const Header = () => (
  <div className={styles.AppHeader}>
      <Link href="/">
        <div className={styles.LogoAndName}>
          <h1>Oat Reviews!</h1>
          <div>
          </div>
        </div>
      </Link>
  </div>
);

export default Header;