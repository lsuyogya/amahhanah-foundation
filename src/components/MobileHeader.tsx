import { Link } from "@tanstack/react-router";
import { HeaderLinkOptions } from "../routes";
import { useState } from "react";

const MobileHeader = ({ links }: { links: HeaderLinkOptions[] }) => {
  // Separate the logo link from the rest
  const logoLink = links.find((link) => link.label.toLowerCase() === "logo");
  const otherLinks = links.filter(
    (link) => link.label.toLowerCase() !== "logo"
  );
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  return (
    <header className="mainGrid header mobileHeader">
      <div className="content">
        {logoLink && (
          <Link
            {...logoLink}
            key={logoLink.to}
            activeProps={{ className: `active` }}
            className="logoLink"
          >
            {logoLink.children ?? logoLink.label}
          </Link>
        )}
        <div
          className="hamburger"
          data-open={hamburgerOpen}
          onClick={() => {
            setHamburgerOpen((prev) => !prev);
          }}
        />
        <div className="sidebar" data-open={hamburgerOpen}>
          <nav className="breakout nav">
            {otherLinks.map((link) => (
              <Link
                {...link}
                key={link.to}
                activeProps={{ className: `active` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default MobileHeader;
