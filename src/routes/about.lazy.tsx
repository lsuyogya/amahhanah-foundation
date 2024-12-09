import { createLazyFileRoute } from "@tanstack/react-router";
import videoUrl from "../assets/videos/randomVid.mp4";
import "../styles/pages/about.scss";
import SupporterSlide from "../components/SupporterSlide";
import leftWing from "../assets/images/WheatLeft.svg";
import rightWing from "../assets/images/WheatRight.svg";
import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";
import journeyImgUrl from "../assets/images/JourneyImg.png";
import { CSSProperties } from "react";
import EventGrid from "../components/EventGrid";
export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  const awardList = [
    {
      imgUrl: award1,
      year: 2021,
      title: "Best NGO Award",
      location: "Berlin, Germany",
    },
    {
      imgUrl: award2,
      year: 2018,
      title: "Global Award",
      location: "New York, USA",
    },
    {
      imgUrl: award3,
      year: 2014,
      title: "Foresto Award",
      location: "New Delhi, India",
    },
    {
      imgUrl: award4,
      year: 2010,
      title: "Earth Saver Award",
      location: "Vienna, Austria",
    },
  ];
  return (
    <>
      <section
        className="mainGrid"
        style={{ marginBlock: "calc(var(--sectionGap) / 2)" }}
      >
        <div className="content">
          <div className="txtWrapper">
            <small className="dashTitle">Know about us</small>
            <div className="desktop-grid-col-2">
              <h1 className="sectionTitle">
                We are a nonprofit team working across Nepal
              </h1>
              <div className="">
                <p>
                  <strong>
                    Aenean faucibus nibh et justo cursus id rutrum lorem
                    imperdiet. Nunc ut sem vitae risus tristique posuere.
                  </strong>
                </p>
                <br />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Suspendisse varius enim
                  elementum tristique.
                </p>
              </div>
            </div>
          </div>
          <video src={videoUrl} className="fullWidthVid" controls></video>
        </div>
      </section>
      <section className="mainGrid noGap aboutSection">
        <div className="content">
          <div className="desktop-grid-col-2">
            <div className="grid-item">
              <strong>Our Mission</strong>
              <h2>We make the world we save owr own environment</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit quaerat eius, dolorum, iure, perferendis possimus
                numquam quo nulla cum repellendus expedita fugiat sapiente
                recusandae quis quisquam reiciendis at facilis quae.
              </p>
            </div>
            <div className="grid-item">
              <strong>Our Vision</strong>
              <h2>Plant more trees to make world air pollution free</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Aenean faucibus nibh et justo
                cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                tristique posuere.
              </p>
            </div>
          </div>
          <span style={{ textTransform: "uppercase" }}>Our Supporters</span>
          <SupporterSlide />
        </div>
      </section>
      <section className="mainGrid awards">
        <div className="content">
          <h1 className="h1">Awards & Recognition</h1>
          <div className="awardGrid">
            {awardList.map((award) => (
              <div className="awardCard">
                <div
                  className="imgHolder"
                  style={
                    {
                      "--beforeWing": `url(${leftWing})`,
                      "--afterWing": `url(${rightWing})`,
                    } as CSSProperties
                  }
                >
                  <img src={award.imgUrl} height={42} width={42} />
                </div>
                <div className="txtWrapper">
                  <div className="year">{award.year}</div>
                  <h2 className="title">{award.title}</h2>
                  <small className="location">{award.location}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mainGrid ourJourney">
        <div className="content bgDark">
          <div className="txtWrapper">
            <span className="uppercase letterSpread">Our Journey</span>
            <h1>How we raised 34M</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh.
            </p>
            <div className="highlights">
              <div className="highlight">
                <strong>34M+</strong>
                <small>Donation Received</small>
              </div>
              <div className="highlight">
                <strong>400+</strong>
                <small>Volunters</small>
              </div>
              <div className="highlight">
                <strong>40K+</strong>
                <small>Trees planted</small>
              </div>
            </div>
          </div>
          <div className="imgWrapper">
            <img src={journeyImgUrl} alt="" />
          </div>
        </div>
      </section>
      <EventGrid />
    </>
  );
}
