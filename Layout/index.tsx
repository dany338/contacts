import React from "react";
import Head from "next/head";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Header from "../components/Header";

export interface ILayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <CssBaseline />
      <Container maxWidth='xl'>{children}</Container>
    </>
  );
};

export default Layout;