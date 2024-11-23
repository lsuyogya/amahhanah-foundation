import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import React, { useRef } from "react";
import "../styles/theme.scss";
import { useHorizontalDistanceObserver } from "../hooks/useHorizontalDistance";
import { headerLinks as links } from "../routes";
import MobileHeader from "../components/MobileHeader";
import DesktopHeader from "../components/DesktopHeader";
import Footer from "../components/Footer";

const TanStackRouterDevtools =
  import.meta.env.MODE === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRoute({
  component: () => {
    const leftEdgeRef = useRef(null);
    const rightEdgeRef = useRef(null);
    const isMobileView = useHorizontalDistanceObserver(
      leftEdgeRef,
      rightEdgeRef,
      200
    );
    return (
      <>
        <div className="headerHelper header mainGrid">
          <div className="breakout nav">
            headerLinks as{" "}
            {links.map((link, index) => {
              return (
                <Link
                  {...link}
                  key={link.to}
                  ref={
                    index === 0
                      ? leftEdgeRef
                      : index === 1
                        ? rightEdgeRef
                        : null
                  }
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
        {isMobileView ? (
          <MobileHeader links={links} />
        ) : (
          <DesktopHeader links={links} />
        )}
        <main>
          <Outlet />
        </main>
        <Footer />
        <TanStackRouterDevtools initialIsOpen={false} />
      </>
    );
  },
});
