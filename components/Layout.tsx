import Head from 'next/head'
import Header from './header/Header';

const layoutStyle = {
};

const Layout = props => (
  <div style={layoutStyle}>
      <Head>
        <title>JH Lab</title>
      </Head>
    <Header />
    {props.children}
  </div>
);

export default Layout;