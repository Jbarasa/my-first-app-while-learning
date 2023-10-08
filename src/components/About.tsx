import img1 from "../assets/samples/image-10.jpg";
import Button from "./Button";
import "./about.scss";

const About = () => {
   return (
      <section id="about" className="about">
         <div className="container">
            <h1>
               About <span>Us</span>
            </h1>
            <div className="flex">
               <img src={img1} alt="About Us image" />
               <div className="">
                  <h4>Explore the difference</h4>
                  <p>
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Dolorem laborum eveniet voluptatibus veniam assumenda nam.
                  </p>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Iste unde cum labore beatae pariatur temporibus.
                  </p>
                  <Button
                     bgColor="rgba(98, 0, 128, 0.74)"
                     color="#fff"
                     name={"Read more"}
                  />
               </div>
            </div>
         </div>
      </section>
   );
};
export default About;
