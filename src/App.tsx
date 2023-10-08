import About from "./components/About";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

const App = () => {
   return (
      <>
         <Navbar />
         <Hero />
         <About />
         <Services />
         <Blog />
         <Footer />
      </>
   );
};
export default App;
