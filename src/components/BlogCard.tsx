import React from "react";
import { BsMapFill } from "react-icons/bs";
import "./blog.scss";

interface blogProps {
   img: string;
   title: string;
   description: string;
   location: string;
   price: number;
   days: number;
   date: string;
}

const BlogCard: React.FC<blogProps> = (props) => {
   const { img, title, description, location, price, date, days } = props;
   return (
      <div className="blogcard">
         <div className="container">
            <img src={img} alt={title} />
            <span>{date}</span>
         </div>
         <div className="block">
            <h4>{title}</h4>
            <p>{description}</p>
            <div className="flex">
               <div className="row">
                  <BsMapFill />
                  <span>{location}</span>
               </div>
               <div className="row">
                  <span>From</span>
                  <span>{`KSh ${price}`}</span>
               </div>
               <div className="row">
                  <span>{days}</span>
                  <span>Days</span>
               </div>
            </div>
         </div>
      </div>
   );
};
export default BlogCard;
