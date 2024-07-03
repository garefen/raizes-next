import Image from "next/image";
import styles from "./styles/Page.module.scss";
import Hero from "./sections/Hero/Hero";
import Features from "./sections/Features/Features";
import Contact from "./sections/Contact/Contact";
import Footer from "./sections/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
       <Hero />
       <Features />
       <Contact />
       <Footer />
    </main>
  );
}
