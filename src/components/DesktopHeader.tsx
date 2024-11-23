import { Link } from "@tanstack/react-router";
import { HeaderLinkOptions } from "../routes";

const DesktopHeader = ({ links }: { links: HeaderLinkOptions[] }) => {
  return (
    <header className="mainGrid header">
      <nav className="breakout nav">
        {links.map((link) => {
          return (
            <Link {...link} key={link.to} activeProps={{ className: `active` }}>
              {link.children ?? link.label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
};

export default DesktopHeader;
