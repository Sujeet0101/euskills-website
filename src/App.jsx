import { useState, useEffect } from "react";
import styles from "./style";

import {
  Navbar,
  Blogs,
  AboutUs,
  ClientLogo,
  ContactUs,
  Counts,
  Course,
  CTA,
  DreamJob,
  FAQ,
  Footer,
  Hero,
  HomeService,
  ServicePage,
  SeccessStories,
  Testimonials,
} from "./components";

const App = () => {

    const [shadow, setShadow] = useState(false);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className=" w-full ">
      <div
        className={`${styles.paddingX} ${styles.flexCenter} ${
          shadow ? "box-shadow" : ""
        } sticky top-0 z-50 `}
      >
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={` ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={` ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <ClientLogo />
          <DreamJob />
          <Counts />
          <HomeService />
          <Course />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>

      <div className="h-[1200px]"></div>
    </div>
  );
};

export default App;
