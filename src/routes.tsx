import { AnyRouter, LinkOptions, linkOptions } from "@tanstack/react-router";
import Logo from "./assets/Ammanah-Foundation-Logo.svg?react";

export const headerLinks = [
  linkOptions({
    to: "/",
    label: "Logo",
    children: <Logo />,
    className: "logoLink",
  }),
  linkOptions({
    to: "/",
    label: "Home",
  }),
  linkOptions({
    to: "/about",
    label: "About",
  }),
  linkOptions({
    to: "/media",
    label: "Media",
  }),
  linkOptions({
    to: "/contact",
    label: "Contact",
  }),
  linkOptions({
    to: "/donate",
    label: "Donate",
    className: "btnDark",
  }),
];

export interface HeaderLinkOptions extends LinkOptions<AnyRouter> {
  label: string;
  className?: string;
  children?: React.ReactNode;
}

type LinkOption = {
  to: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
};

type FooterLinkGroup = {
  label?: string;
  external?: boolean;
  subLinks: LinkOption[];
};
export const footerLinks: FooterLinkGroup[] = [
  {
    subLinks: [
      linkOptions({
        to: "/",
        label: "Logo",
        children: <Logo />,
        className: "logoLink",
      }),
    ],
  },
  {
    label: "Our Team",
    subLinks: [
      linkOptions({
        to: "/about",
        label: "About us",
      }),
      linkOptions({
        to: "/",
        label: "Team",
      }),
      linkOptions({
        to: "/",
        label: "What We Do",
      }),
      linkOptions({
        to: "/contact",
        label: "Contact",
      }),
    ],
  },
  {
    label: "More",
    subLinks: [
      linkOptions({
        to: "/",
        label: "Projects",
      }),
      linkOptions({
        to: "/",
        label: "Events",
      }),
      linkOptions({
        to: "/donate",
        label: "Blog",
      }),
    ],
  },
  {
    label: "Connect",
    external: true,
    subLinks: [
      {
        to: "https://www.facebook.com",
        label: "Facebook",
      },
      {
        to: "https://www.instagram.com",
        label: "Instagram",
      },
      {
        to: "https://www.twitter.com",
        label: "Twitter",
      },
      {
        to: "https://www.linkedin.com",
        label: "Linkedin",
      },
    ],
  },
];
