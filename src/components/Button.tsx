import React from "react";

interface buttonProps {
   name: string;
   bgColor?: string;
   color?: string;
}

const Button: React.FC<buttonProps> = ({ name, bgColor, color }) => {
   // const () = buttonProps;
   return (
      <button style={{ color: color, backgroundColor: bgColor }}>{name}</button>
   );
};
export default Button;
