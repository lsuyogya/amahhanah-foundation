import { Link } from "@tanstack/react-router";
import { footerLinks } from "../routes";

const Footer = () => {
  return (
    <footer className="mainGrid">
      <div className="breakout">
        <div className="footerGrid">
          {footerLinks.map((link) => {
            return (
              <div className="grid-item">
                {link.label && <h2>{link.label}</h2>}
                <ul>
                  {link.subLinks.map((subLink) => {
                    return (
                      <li>
                        {subLink.label.toLowerCase() == "logo" ? (
                          subLink.children
                        ) : (
                          <Link to={subLink.to}>{subLink.label}</Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
          <div className="grid-item">
            <h2>Subscribe to get latest updates.</h2>
            <form
              className="newsLetter"
              data-invalid-txt="Please Enter a valid email"
            >
              <input
                type="email"
                placeholder="Your email"
                pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              />
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
