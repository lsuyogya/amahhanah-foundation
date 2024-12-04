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
// @ts-expect-error
import "@splidejs/react-splide/css";
import "../styles/pages/homepage.scss";
import logoUrl1 from "../assets/images/RandomLogo1.png";
import logoUrl2 from "../assets/images/RandomLogo2.png";
import logoUrl3 from "../assets/images/RandomLogo3.png";
import logoUrl4 from "../assets/images/RandomLogo4.png";
import card from "../assets/images/card.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import CardContentWithin from "../components/CardContentWithin";
import whatWeDoUrl from "../assets/images/whatWeDo.png";
import whatWeDoIconURL from "../assets/images/whatWeDo.svg";
import whatWeDoIconURL1 from "../assets/images/whatWeDo1.svg";
import whatWeDoIconURL2 from "../assets/images/whatWeDo2.svg";
import whatWeDoIconURL3 from "../assets/images/whatWeDo3.svg";
import PieChart from "../components/PieChart";
import contributeBannerUrl from "../assets/images/contributeBanner.png";
import newsImgUrl from "../assets/images/news.png";
import newsImgUrl2 from "../assets/images/news2.png";
import newsImgUrl3 from "../assets/images/news3.png";
import newsImgUrl4 from "../assets/images/news4.png";
import Arrow from "../assets/images/Arrow.svg?react";
import WorldMap from "../assets/images/world.svg?react";

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
  const whatWeDoList = [
    {
      iconPath: whatWeDoIconURL,
      title: "Build Healthy Cities",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      iconPath: whatWeDoIconURL1,
      title: "Tree Plantation",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      iconPath: whatWeDoIconURL2,
      title: "Protect Land and Water",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
    {
      iconPath: whatWeDoIconURL3,
      title: "Animal Safety",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
    },
  ];
  const donationData = [
    { data: 40, color: "#bef3c0", label: "planting trees" },
    { data: 35, color: "#ac94f1", label: "cleanliness program" },
    { data: 10, color: "#fff0ca", label: "helping people" },
    { data: 10, color: "#f9cf64", label: "animal safety" },
    { data: 5, color: "#f38fbf", label: "feeding the poor" },
  ];
  const donationDataTotal = donationData.reduce(
    (acc, item) => acc + item.data,
    0
  );
  const newsCards = [
    {
      title: "Don’t destroy greenery and don’t spoil scenery",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imgUrl: newsImgUrl,
    },
    {
      title: " Is climate change happening faster than expected?",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imgUrl: newsImgUrl2,
    },
    {
      title: `Top 10 facts about wind farms you didn't know`,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imgUrl: newsImgUrl3,
    },
    {
      title: `Our goal is to make water available for everyone`,
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim",
      imgUrl: newsImgUrl4,
    },
  ];
  const events = [
    {
      date: { day: 23, mth: "sep", dateTime: "2024-09-23" },
      tag: "Next Events",
      title: "Say no to plastic usage and save the planet",
    },
    {
      date: { day: 25, mth: "sep", dateTime: "2024-09-23" },
      tag: "Next Events",
      title: "Weekly cleaning program",
    },
  ];
  return (
    <>
      <section className={`mainGrid ${bannerStyles.banner}`}>
        <div className={`fullWidth ${bannerStyles.radialPatterns}`}></div>
        <div className={`content`}>
          <div className={bannerStyles.halfGrid}>
            <div className={bannerStyles.txtWrapper}>
              <h1>Where Trust Meets Action </h1>
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
        <div className="content">
          <div className="mapContainer">
            <h1> Our Reach</h1>
            <WorldMap />
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
      <section className="mainGrid whatWeDo">
        <div className="content col-60-40">
          <div className="txtWrapper">
            <small className="dashTitle">What We Do</small>
            <h1 className="sectionTitle">
              We are for this, we care for that and we care.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.
            </p>
            <ul className="listWithIcons">
              {whatWeDoList.map((whatWeDo, index) => (
                <li
                  key={whatWeDo.title + index}
                  style={
                    {
                      "--iconUrl": `url('${whatWeDo.iconPath}')`,
                    } as CSSProperties
                  }
                >
                  <div className="title">{whatWeDo.title}</div>
                  <p>{whatWeDo.content}</p>
                </li>
              ))}
            </ul>
            <div>
              <button className="btnPrimary">Learn More</button>
            </div>
          </div>
          <div className="imgWrapperAbsolute">
            <img src={whatWeDoUrl}></img>
          </div>
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
              {cardWithinArray.map((cardWithin, index) => (
                <CardContentWithin
                  key={cardWithin.title + index}
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

      <section className="mainGrid donationChart">
        <div className="content bgDark">
          <div className="donationGrid">
            <div className="txtWrapper">
              <h1 className="sectionTitle txtLight">
                How we spend your donations and where it goes
              </h1>
              <p className="txtLightGrey">
                We understand that when you make a  donation, you want to know
                exactly where your money is going and we pledge to be
                transparent.
              </p>
              <ul className="chartLegend">
                {donationData.map((data, index) => {
                  return (
                    <li key={data.label + index}>
                      <span
                        className="colorBox"
                        style={
                          {
                            "--bgCol": data.color,
                          } as CSSProperties
                        }
                      ></span>

                      <span className="txtLight">
                        {(data.data / donationDataTotal) * 100}% {data.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <PieChart
              // data={donationChartData}
              // colors={donationChartColors}
              svgClassName="donationSvg"
              chartData={donationData}
              delayStep={0.29}
              duration={0.3}
            ></PieChart>
          </div>
        </div>
      </section>

      <section className="mainGrid">
        <div className="content">
          <div className="imgBanner">
            <img src={contributeBannerUrl} />
            <div className="txtWrapper">
              <h1 className="sectionTitle txtLight">
                You can contribute to make the environment greener!
              </h1>
              <div className="btnGrp">
                <button className="btnPrimary">Join as a volunter</button>
                <button className="btnLight">Donate</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mainGrid readNews">
        <div className="content">
          <div className="lineAfter">
            <h1>Read Our News</h1>
            <div className="line" />
          </div>
          <div className="newsCardGrid">
            {newsCards.map((news) => (
              <div className="grid-item">
                <div className="imgWrapper">
                  <img src={news.imgUrl} />
                </div>
                <div className="txtWrapper">
                  <h2>{news.title}</h2>
                  <p className="content">{news.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mainGrid events">
        <div className="content">
          <div className="lineAfter">
            <h1>Our Events</h1>
            <div className="line" />
          </div>
          <div className="eventGrid">
            {events.map((event, index) => (
              <div className="eventCard">
                <time dateTime={event.date.dateTime}>
                  <span className="day">{event.date.day}</span>
                  <span className="mth">{event.date.mth}</span>
                </time>
                <div className="expo">
                  <div className="tag">{event.tag}</div>
                  <div className="title">{event.title}</div>
                </div>
                <div className="arrowbtn">
                  <Arrow />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <button className="stickyDonateBtn">Donate</button>
    </>
  );
}
