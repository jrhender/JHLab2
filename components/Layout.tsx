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
    <style jsx global>{`
      body {
        margin: 0;
      }
    `}
    </style>
  </div>
);

export default Layout;