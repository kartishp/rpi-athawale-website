import type { NextPage } from "next";
import Image from "next/image";
import PageLayout from "../components/layouts/PageLayout";

const Home: NextPage = () => {
  return (
    <PageLayout>
      <section className="w-full min-h-screen h-full shadow-lg">
        <Image src="/hero-banner.png" layout="fill" alt="hero-banner" />
      </section>
    </PageLayout>
  );
};

export default Home;
