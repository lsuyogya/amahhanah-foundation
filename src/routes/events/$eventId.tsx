// import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";
import LocationIcon from "../../assets/images/locationIcon.svg?react";
import CalenderIcon from "../../assets/images/CalenderIcon.svg?react";
import style from "../../styles/modules/eventDetail.module.scss";
import EventGrid from "../../components/EventGrid";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

export const Route = createFileRoute("/events/$eventId")({
  component: RouteComponent,
});
const event = {
  eventId: 1,
  eventTitle: "This Page Describes The Event",
  location: "8 Brewery Drive, Hudson, NH 03051, USA",
  date: "September 3, 2021 8:30 AM",
  dateTime: "2021-09-03T08:30",
  eventDescription: `<p>Et morbi vitae lobortis nam odio. Faucibus vitae vel neque nullam in in lorem platea mattis. Euismod aenean rhoncus scelerisque amet tincidunt scelerisque aliquam. Luctus porttitor elit vel sapien, accumsan et id ut est. Posuere molestie in turpis quam. Scelerisque in viverra mi ut quisque. In sollicitudin sapien, vel nulla quisque vitae. Scelerisque eget accumsan, non in. Posuere magna erat bibendum amet, nisi eu id.
</p><p>
Viverra at diam nunc non ornare. Sed ultricies pulvinar nunc, lacus sem. Tellus aliquam ut euismod cursus dui lectus. Ut amet, cras volutpat dui. A bibendum viverra eu cras.
Mauris morbi sed dignissim a in nec aliquam fringilla et. Mattis elit dignissim nibh sit. Donec arcu sed elit scelerisque tempor ornare tristique. Integer faucibus duis praesent tempor feugiat ornare in. Erat libero egestas porttitor nunc pellentesque mauris et pulvinar eget.</p>`,
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
    </>
  );
}
