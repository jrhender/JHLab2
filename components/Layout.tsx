import Head from 'next/head'
import Header from './header/Header';
import Footer from './footer/Footer';

const layoutStyle = {
  margin: 20,
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const Layout = props => (
  <div>
    <Head>
      <title>JH Lab</title>
    </Head>
    <Header />
    <div style={layoutStyle}>
      <div style={{margin: '0 20px'}}>
      {props.children}
      </div>
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