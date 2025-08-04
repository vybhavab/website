import React, { ReactElement } from 'react';
import '../assets/css/index.css';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import type { AppProps } from 'next/app';

const App = ({ Component, pageProps }: AppProps): ReactElement => (
  <div className="min-h-screen">
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </div>
);

export default App;
