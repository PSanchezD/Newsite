import { Link } from "react-router-dom";
import logoimg from "../Asset/logo.png";

function Footer() {
  return (
    <>
      <div className="footer-c">
        <div className="footer-r">
          <div className="footer-logo">
            <h2>NewsLite</h2>
            <div>
              <img className="logoimg" src={logoimg} alt="logo" />
            </div>
          </div>
          <div className="footer-links">
            <div>
              <Link to="/About">ABOUT US</Link>
              <a href="https://portfolio-pedro-s.netlify.app/" target="_blank">
                Contact Me
              </a>
              <a
                href="https://www.linkedin.com/in/pedro-s-3948b6126/"
                target="_blank"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
