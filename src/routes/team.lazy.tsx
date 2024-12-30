import { createLazyFileRoute } from "@tanstack/react-router";
import journeyImgUrl from "../assets/images/JourneyImg.png";
import { CSSProperties } from "react";
import leftWing from "../assets/images/WheatLeft.svg";
import rightWing from "../assets/images/WheatRight.svg";
import award1 from "../assets/images/award1.png";
import award2 from "../assets/images/award2.png";
import award3 from "../assets/images/award3.png";
import award4 from "../assets/images/award4.png";
import team1 from "../assets/images/team1.png";
import "../styles/pages/team.scss";
import team2 from "../assets/images/team2.png";
import team3 from "../assets/images/team3.png";
import team4 from "../assets/images/team4.png";
import team5 from "../assets/images/team5.png";
import team6 from "../assets/images/team6.png";
import team7 from "../assets/images/team7.png";
import team8 from "../assets/images/team8.png";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import EventGrid from "../components/EventGrid";

export const Route = createLazyFileRoute("/team")({
  component: RouteComponent,
});

function RouteComponent() {
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
  const teamList = [
    {
      imgUrl: team1,
      name: "Leonard John Davies",
      position: "Cofounder, CEO",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team2,
      name: "Francis Weber",
      position: "Vice Chairman",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team3,
      name: "Kyla Obrien",
      position: "Head of Authority",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team4,
      name: "Adrian Dixon",
      position: "Support Executive",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team5,
      name: "Freddy Busby",
      position: "Project Manager",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team6,
      name: "Dale Banks",
      position: "Accountatnt, Finance",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team7,
      name: "Miriam Middleton",
      position: "Cofounder, CEO",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
    {
      imgUrl: team8,
      name: "Ellen Walton",
      position: "Vice Chairman",
      facebook: "https://www.facebook.com",
      twitter: "https://www.x.com",
      linkedin: "https://www.linkedin.com",
    },
  ];
  return (
    <>
      <section
        className="mainGrid ourTeam"
        style={{ marginBlock: "calc(var(--sectionGap) / 2)" }}
      >
        <div className="content">
          <div className="headerBlock">
            <h1 className="sectionTitle">Meet Our Team</h1>
            <p className="">
              Our Team is composed of dedicated professionals who bring a
              diverse set of skills and experiences. We work collaboratively to
              achieve excellence, ensuring each project reflects our shared
              commitment to quality and innovation.
            </p>
          </div>
          <div className="teamMembers">
            {teamList.map((team, index) => (
              <div className="memberCard" key={team.name + index}>
                <div className="imgWrapper">
                  <img src={team.imgUrl} alt="" />
                </div>
                <div className="txtWrapper">
                  <p className="name">{team.name}</p>
                  <p className="position">{team.position}</p>
                  <div className="socialList">
                    {team.facebook && (
                      <a href={team.facebook} target="blank">
                        <FaFacebook />
                      </a>
                    )}
                    {team.twitter && (
                      <a href={team.twitter} target="blank">
                        <FaTwitter />
                      </a>
                    )}
                    {team.linkedin && (
                      <a href={team.linkedin} target="blank">
                        <FaLinkedin />
                      </a>
                    )}
                  </div>
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
              Ammanah began with a simple belief: that every individual deserves
              the opportunity to live with dignity and purpose. Founded in
              [year] by a group of passionate change makers, our journey started
              with small, community-focused projects aimed at addressing local
              challenges.
            </p>
            <p>
              Over the years, we have grown into a global movement, impacting
              lives across [number] countries. From building schools in
              undeserved regions to responding to humanitarian crises and
              championing sustainability, our story is one of resilience,
              collaboration, and unwavering commitment to creating a better
              world.
            </p>
            <p>
              And we’re just getting started—together, we continue to write the
              next chapters of this transformative journey.
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

      <EventGrid />
    </>
  );
}
