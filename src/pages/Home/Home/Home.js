import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import TopBar from "../../Shared/TopBar/TopBar";
import Banner from "../Banner/Banner";
import CarChemistry from "../CarChemistry/CarChemistry";
import CountDown from "../CountDown/CountDown";
import FeatureCars from "../FeatureCars/FeatureCars";
import LineUp from "../LineUP/LineUp";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <TopBar></TopBar>
      <Navigation></Navigation>
      <Banner></Banner>
      <FeatureCars></FeatureCars>
      <Testimonials></Testimonials>
      <CarChemistry></CarChemistry>
      <CountDown></CountDown>
      <LineUp></LineUp>
      <Footer></Footer>
    </div>
  );
};

export default Home;
