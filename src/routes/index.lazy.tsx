import { createLazyFileRoute } from "@tanstack/react-router";
import bannerUrl from "../assets/images/Banner.png";
import mobileBannerUrl from "../assets/images/BannerCropped.png";
import npUrl from "../assets/images/NP.svg";
import { CSSProperties } from "react";
import bannerStyles from "../styles/modules/banner.module.scss";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <section className={`mainGrid ${bannerStyles.banner}`}>
      <div className={`fullWidth ${bannerStyles.radialPatterns}`}></div>
      <div className={`content`}>
        <div className={bannerStyles.halfGrid}>
          <div className={bannerStyles.txtWrapper}>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit!</h1>
            <button className="btnTransparent">What we Do</button>
          </div>
          <div
            className={`imgWrapper ${bannerStyles.mask}`}
            style={
              {
                "--maskSrc": `url(${npUrl})`,
                "--imgSrc": `url(${bannerUrl})`,
                "--mobileImgSrc": `url(${mobileBannerUrl})`,
              } as CSSProperties
            }
          >
            {/* <img src={bannerUrl} alt="" /> */}
          </div>
        </div>
        <div className={bannerStyles.numbers}>
          <div> 23,800 Data</div>
          <div></div>
          <div> 5840 donations </div>
        </div>
      </div>
    </section>
  );
}
