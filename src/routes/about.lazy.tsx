import { createLazyFileRoute } from "@tanstack/react-router";
import videoUrl from "../assets/videos/randomVid.mp4";
import "../styles/pages/about.scss";
import SupporterSlide from "../components/SupporterSlide";
import EventGrid from "../components/EventGrid";
import StickyDonateBtn from "../components/StickyDonateBtn";
export const Route = createLazyFileRoute("/about")({
  component: About,
});

function About() {
  return (
    <>
      <section
        className="mainGrid "
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
                    Our approach is people-centered and results-driven, ensuring
                    that every initiative brings meaningful change to the lives
                    of those who need it most.
                  </strong>
                </p>
                <br />
                <p>
                  At Ammanah Foundation, we are a global nonprofit organization
                  committed to creating sustainable and equitable solutions for
                  some of the world's most pressing challenges. Founded in
                  [year], we operate across [number] countries, focusing on
                  empowering communities and fostering resilience. Through
                  collaborative efforts with local partners, governments, and
                  donors, we work tirelessly to make a lasting impact in
                  education, healthcare, economic development, and environmental
                  conservation.
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
                To empower underserved communities by providing access to
                education, healthcare, and sustainable opportunities, ensuring
                dignity, equality, and a brighter future for all. We are
                dedicated to driving transformative change through innovative
                programs, advocacy, and partnerships, fostering resilience and
                self-reliance.
              </p>
            </div>
            <div className="grid-item">
              <strong>Our Vision</strong>
              <h2>Plant more trees to make world air pollution free</h2>
              <p>
                A world where every individual, regardless of their background,
                has the opportunity to thrive and contribute to a just,
                inclusive, and sustainable society. We envision communities that
                are resilient, self-reliant, and empowered to lead their
                development for generations to come.
              </p>
            </div>
          </div>
          <span style={{ textTransform: "uppercase" }}>Our Supporters</span>
          <SupporterSlide />
        </div>
      </section>
      <EventGrid />
      <StickyDonateBtn />
    </>
  );
}
