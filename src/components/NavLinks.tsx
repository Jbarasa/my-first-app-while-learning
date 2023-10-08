import { navbarLinks } from "../constants/constant";

const NavLinks = () => {
   return (
      <div className="nav-center">
         {navbarLinks.map((navlink) => {
            return (
               <a href={navlink.link} key={navlink.link} rel="noreferrer">
                  {navlink.name}
               </a>
            );
         })}
      </div>
   );
};
export default NavLinks;
