import Button from "./Button";
import "./hero.scss";

const Hero = () => {
   return (
      <main id="home" className="hero">
         <div className="container">
            <h1>continue exploring</h1>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
               voluptatem nobis eligendi recusandae.
            </p>
            <Button name={"explore tours"} />
         </div>
      </main>
   );
};
export default Hero;
