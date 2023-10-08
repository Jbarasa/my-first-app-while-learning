import { services } from "../constants/constant";
import ServiceComponent from "./ServiceComponent";
import "./services.scss";

const Services = () => {
   return (
      <section id="services" className="services">
         <h1>
            Our <span>Services</span>
         </h1>
         <div className="flex">
            {services.map((service) => {
               const { icon, title, description } = service;
               return (
                  <ServiceComponent
                     icon={icon}
                     title={title}
                     description={description}
                     key={title}
                  />
               );
            })}
         </div>
      </section>
   );
};
export default Services;
