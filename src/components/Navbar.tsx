import NavLinks from "./NavLinks";
import "./navbar.scss";

const Navbar = () => {
   return (
      <nav className="navbar">
         <div className="logo">
            <span className="tembea">JB</span>
            <span className="kenya">Tour</span>
            <span className="safaris">Roads</span>
         </div>
         <NavLinks />
      </nav>
   );
};
export default Navbar;
