import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import ImageSlider from "@/components/ImageSlider";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Offers from "@/components/Offers";
import Products from "@/components/Products";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Navbar />
      <Hero />
      <Offers />
      <Products />
      <Menu />
      <ImageSlider />
      <Footer />
    </>
  );
}
