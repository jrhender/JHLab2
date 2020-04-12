import Head from 'next/head'
import Header from './header/Header';
import Footer from './footer/Footer';

const layoutStyle = {
  margin: 20,
};

const Layout = props => (
  <div>
    <Head>
      <title>JH Lab</title>
    </Head>
    <Header />
    <div style={layoutStyle}>
      {props.children}
    </div>
    <Footer />
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default Layout;