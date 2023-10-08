import NavLinks from "./NavLinks";
import "./footer.scss";

const Footer = () => {
   return (
      <footer className="footer">
         <div className="block">
            <NavLinks />
            <span>
               Copyright &copy; JBTours Travel Company{" "}
               {new Date().getFullYear()}. All Rights Reserved
            </span>
         </div>
      </footer>
   );
};
export default Footer;
