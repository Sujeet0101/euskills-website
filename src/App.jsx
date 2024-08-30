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
  return (
  <div className=" w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
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
  </div>
  )
};

export default App;
