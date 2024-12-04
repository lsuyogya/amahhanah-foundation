import { Link } from "@tanstack/react-router";
import { HeaderLinkOptions } from "../routes";
import { useState, useEffect, useLayoutEffect } from "react";
import { useAnimation, motion } from "motion/react";
const DesktopHeader = ({ links }: { links: HeaderLinkOptions[] }) => {
  const controls = useAnimation();
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [headerHeight, setHeaderHeight] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setVisible(currentScrollY < prevScrollY || currentScrollY === 0);
    setPrevScrollY(currentScrollY);
  };

  useLayoutEffect(() => {
    const updateHeaderHeight = () => {
      const height = document.querySelector("header")?.offsetHeight || 0;
      setHeaderHeight(height);
      document.body.style.setProperty("--headerHeight", `${height}px`);
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => window.removeEventListener("resize", updateHeaderHeight);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  useEffect(() => {
    controls.start({
      y: visible ? 0 : -headerHeight - 32,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    });
  }, [visible, controls, headerHeight]);

  return (
    <motion.header
      className="mainGrid header"
      animate={controls}
      initial={{ y: 0 }}
    >
      <nav className="breakout nav">
        {links.map((link) => {
          return (
            <Link {...link} key={link.to} activeProps={{ className: `active` }}>
              {link.children ?? link.label}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default DesktopHeader;
