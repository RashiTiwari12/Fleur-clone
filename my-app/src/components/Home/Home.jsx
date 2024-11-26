import React from "react";

import Header from "../Header/Header";
import { Main } from "../Main/Main";
import Testimonials from "../Testimonials/Testimonials";
import Statistics from "../Stats/Statistics";
import AmazingWork from "../AmazingWork/AmazingWork";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Main />
      <Testimonials />
      <Statistics />
      {/* <AmazingWork /> */}
      <Footer />
    </>
  );
};

export default Home;
