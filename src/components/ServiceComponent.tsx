import React from "react";
import "./services.scss";

interface serviceProp {
   icon: React.ElementType;
   title: string;
   description: string;
}

const ServiceComponent: React.FC<serviceProp> = (props) => {
   const { icon: Icon, title, description } = props;
   return (
      <div className="service_component">
         {Icon && <Icon className="service_icons" size={70} />}
         <span>
            <h4>{title}</h4>
            <p>{description}</p>
         </span>
      </div>
   );
};
export default ServiceComponent;
