import type { NextPage } from "next";

import AppHead from "@/components/AppHead";
import Loader from "@/components/Loader";
import SkipToMain from "@/components/SkipToMain";
import Header from "@/components/Header";
import SocialLinks from "@/components/SocialLinks";
import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";
import ProjectSection from "@/sections/ProjectSection";
import Footer from "@/components/Footer";
import { Props } from "react-rough-notation/dist/RoughNotation/types";

export const meta = {
  description:
    "",
  author: "Vinh Do",
  type: "website",
  ogImage: ``,
  siteName: "VD Portfolio",
  imageAlt: "VD portfolio website",
};

const Home: NextPage<Props> = ({}) => {
  return (
    <>
      <AppHead
        title="VD Portfolio"
        url={`${process.env.NEXT_PUBLIC_URL}`}
        meta={meta}
      />
      <Loader>VD Portfolio</Loader>
      <div className="bg-bglight dark:bg-bgdark overflow-hidden">
        <div className="selection:bg-marrsgreen selection:text-bglight dark:selection:bg-carrigreen dark:selection:text-bgdark">
          <SkipToMain />
          <Header />
          <main id="main">
            <HeroSection />
            <AboutSection />
            <ProjectSection />
            {/* <BlogSection posts={blogPosts} /> */}
            {/* <ContactSection /> */}
          </main>
          <SocialLinks page="index" />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
