import Head from "next/head";
import React from "react";
import Footer from "../modules/Footer";
import Header from "../modules/Header";

interface PageLayoutInterface {
  children: JSX.Element | JSX.Element[];
}

const PageLayout = ({ children }: PageLayoutInterface) => {
  return (
    <div className="w-full min-h-screen h-full font-montserrat">
      <Head>
        <title>RPI Athawale</title>
      </Head>
      <Header />
      <main className="w-full min-h-screen h-full md:-mt-32 md:mb-32">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
