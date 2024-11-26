import { createLazyFileRoute } from "@tanstack/react-router";
import bannerUrl from "../assets/images/Banner.png";
import mobileBannerUrl from "../assets/images/BannerCropped.png";
import npUrl from "../assets/images/NP.svg";
import { CSSProperties } from "react";
import bannerStyles from "../styles/modules/banner.module.scss";
import splideStyles from "../styles/modules/splide.module.scss";
import vidUrl from "../assets/videos/randomVid.mp4";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
//@ts-ignore
import "@splidejs/react-splide/css";
import logoUrl1 from "../assets/images/RandomLogo1.png";
import logoUrl2 from "../assets/images/RandomLogo2.png";
import logoUrl3 from "../assets/images/RandomLogo3.png";
import logoUrl4 from "../assets/images/RandomLogo4.png";
import card from "../assets/images/card.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import CardContentWithin from "../components/CardContentWithin";

export const Route = createLazyFileRoute("/")({
  component: Index,
});

function Index() {
  const logoUrlArray = [logoUrl1, logoUrl2, logoUrl3, logoUrl4];
  const cardWithinArray = [
    {
      imgUrl: card,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnUrl: "/",
    },
    {
      imgUrl: card2,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnUrl: "/",
    },
    {
      imgUrl: card3,
      title: "Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      btnUrl: "/",
    },
  ];
  return (
    <>
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
      <section className="mainGrid">
        <div className="content col-60-40">
          <div className="txtWrapper">
            <small className="dashTitle">Know About Us</small>
            <h1 className="sectionTitle">We do Something that is to be done</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              debitis harum exercitationem ducimus excepturi alias quaerat fugit
              laborum tempore temporibus molestiae, facilis, porro repellendus
              culpa quae esse deleniti tempora officia.
            </p>
            <div>
              <button className="btnPrimary">Learn More</button>
            </div>
          </div>
          <div className="imgWrapperAbsolute">
            <video src={vidUrl} controls></video>
          </div>
        </div>
      </section>

      <section className="mainGrid">
        <div className="content">
          <div className="lineAfter">
            <span>Our Supporters</span>
            <div className="line"></div>
          </div>
          <Splide
            aria-label="Supporter Logos"
            options={{
              type: "loop",
              // autoWidth: true,
              perPage: 4,
              arrows: false,
              gap: "2rem",
              autoScroll: {
                speed: 1,
              },
            }}
            extensions={{ AutoScroll }}
          >
            {logoUrlArray.map((str, index) => (
              <SplideSlide key={str + index}>
                <div className={splideStyles.logoWrapper}>
                  <img
                    src={str}
                    alt={`Image ${index}`}
                    className={splideStyles.logoImg}
                  />
                </div>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </section>

      <section className="mainGrid">
        <div className="content">
          <div className="txtWrapper">
            <small className="dashTitle">Projects we have done</small>
            <h1 className="sectionTitle halfWidthDesktop">
              We are Creating sustainable society, for everyone.
            </h1>
          </div>
          <div className="imgWrapperAbsolute">
            <div className="card-400-grid">
              {cardWithinArray.map((cardWithin) => (
                <CardContentWithin
                  imgUrl={cardWithin.imgUrl}
                  title={cardWithin.title}
                  btnUrl={cardWithin.btnUrl}
                  desc={cardWithin.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
