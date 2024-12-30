// import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import LocationIcon from "../../assets/images/locationIcon.svg?react";
import CalenderIcon from "../../assets/images/CalenderIcon.svg?react";
import style from "../../styles/modules/eventDetail.module.scss";
import EventGrid from "../../components/EventGrid";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import StickyDonateBtn from "../../components/StickyDonateBtn";
import eventImg from "../../assets/images/EventDesc.png";

export const Route = createFileRoute("/events/$eventId")({
  component: RouteComponent,
});
const event = {
  eventId: 1,
  eventTitle: "This Page Describes The Event",
  location: "8 Brewery Drive, Hudson, NH 03051, USA",
  date: "September 3, 2021 8:30 AM",
  dateTime: "2021-09-03T08:30",
  eventDescription: `
  <p>
              Join us for Ammanah Foundation’s first-ever event dedicated to
              raising awareness about the harmful effects of plastic pollution
              and promoting sustainable alternatives. Plastics have become one
              of the most significant environmental challenges of our time,
              polluting our oceans, harming wildlife, and contributing to
              climate change. Through this event, we aim to educate, inspire,
              and empower individuals and communities to take actionable steps
              toward a plastic-free future.
            </p>

            <p>
              <strong>Key Highlights of the Event:</strong>
            </p>
            <ul>
              <li>
                <h4>Educational Workshops</h4>
                <p>
                  Learn about the impact of plastic on ecosystems, human health,
                  and climate, and discover practical ways to reduce plastic use
                  in your daily life.
                </p>
              </li>
              <li>
                <h4>Panel Discussions</h4>
                <p>
                  Hear from environmentalists, sustainability advocates, and
                  innovators about global efforts to combat plastic pollution.
                </p>
              </li>
              <li>
                <h4>DIY Sustainable Alternatives</h4>
                <p>
                  Hands-on sessions to create eco-friendly products, such as
                  reusable bags, natural packaging, and biodegradable solutions.
                </p>
              </li>
              <li>
                <h4>Community Pledge</h4>
                <p>
                  Unite with others by taking the “Say No to Plastic” pledge,
                  committing to reduce single-use plastics and advocate for
                  sustainable choices.
                </p>
              </li>
              <li>
                <h4>Art and Awareness</h4>
                <p>
                  Explore an exhibit showcasing creative artwork made from
                  recycled materials and learn how to turn waste into something
                  meaningful.
                </p>
              </li>
            </ul>
            <img src=${eventImg} alt="" />
            <p>
              Together, we can make a difference—one small change at a time.
              Let’s take the first step towards a cleaner, greener planet!
            </p>`,
};
function RouteComponent() {
  const sanitizedContent = DOMPurify.sanitize(event.eventDescription);
  const { eventId } = Route.useParams();
  return (
    <>
      <section className="mainGridSmall bgPrimaryLight">
        <div className="content firstSectionGap">
          <div className={style.banner}>
            <h1 className="h1Lg">
              {event.eventTitle} {eventId}
            </h1>
            <div className={style.eventDetails}>
              <div className={style.location}>
                <span>
                  <LocationIcon />
                </span>{" "}
                <span> {event.location}</span>
              </div>
              <div className={style.date}>
                <span>
                  <CalenderIcon />
                </span>{" "}
                <time dateTime={event.dateTime}> {event.date}</time>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mainGridSmall">
        <div className="content">
          <h1 className="h1">Event Description</h1>
          <div className={style.contentWrapper}>{parse(sanitizedContent)}</div>
        </div>
      </section>
      <EventGrid wrapperClass="mainGridSmall" />
      <StickyDonateBtn />
    </>
  );
}
