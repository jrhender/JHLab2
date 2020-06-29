import Head from 'next/head'
import Header from '../components_oat/header/Header_oat';
import Footer from '../components_oat/footer/Footer_oat';

const layoutStyle = {
  margin: 20,
  maxWidth: 700,
  marginLeft: 'auto',
  marginRight: 'auto'
};

const Layout_Oat = props => (
  <div style={{display: 'flex', minHeight: '100vh', flexDirection: 'column', fontFamily: 'Raleway'}}>
    <Head>
      <title>Oat Reviews!</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"></link>
    </Head>
    <Header />
    <div style={layoutStyle}>
      <div style={{margin: '0 20px'}}>
      {props.children}
      </div>
    </div>
    <div style={{flexGrow:1}}></div>
    <Footer />
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default Layout_Oat;