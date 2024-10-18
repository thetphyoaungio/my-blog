'use client';

// components/Layout.tsx
import Head from 'next/head';
import React from 'react';

import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>

      <Header />

      <main className='mb-[12%]'>{children}</main>
      
      <Footer />
    </>
  );
};

export default Layout;
