import Head from 'next/head'
import Header from './header/Header';
import Footer from './footer/Footer';

const layoutStyle = {
};

const Layout = props => (
  <div style={layoutStyle}>
      <Head>
        <title>JH Lab</title>
      </Head>
    <Header />
    {props.children}
    <Footer/>
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default Layout;