import Head from "next/head";
import Image from "next/image";
import Allblog from "../components/Allblog/Allblog";
import Events from "../components/Events/Events";
import Footer from "../components/Footer/Footer";
import Heroarea from "../components/Heroarea/Heroarea";
import Navigation from "../components/Navigation/Navigation";
import Searchkeywords from "../components/Searchkeywords/Searchkeywords";
import Singlearticle from "../components/Singlearticle/Singlearticle";
import Subscribe from "../components/Subscribe/Subscribe";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      
      <Navigation/>
      <Heroarea/>
      <Searchkeywords/>
      <Singlearticle/>
      <Testimonials/>
      <Events/>
      <Subscribe/>
      <Footer/>
      
    </div>
  );
}
