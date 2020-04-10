import Link from 'next/link';
import Flask from './Flask';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Flask/>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;