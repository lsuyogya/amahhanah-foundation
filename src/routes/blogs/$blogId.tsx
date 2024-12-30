import { createFileRoute } from "@tanstack/react-router";
import blogImgUrl from "../../assets/images/blogImg.png";
import style from "../../styles/modules/blogDetail.module.scss";
import parse from "html-react-parser";
import DOMPurify from "dompurify";
import StickyDonateBtn from "../../components/StickyDonateBtn";

export const Route = createFileRoute("/blogs/$blogId")({
  component: RouteComponent,
});

function RouteComponent() {
  const blog = {
    id: 1,
    title: "Say No to Plastic Usage and Save the Planet",
    subTitle:
      "In today’s world, plastic pollution has become one of the most urgent environmental challenges. Despite its convenience and widespread use, plastic has far-reaching consequences on our planet. From choking marine life to littering landscapes, the impact of excessive plastic usage is a crisis we can no longer ignore. It’s time to act—to say no to plastic and embrace sustainable alternatives.",
    date: "21 DEC 2024",
    dateTime: "2021-09-03T08:30",
    img: blogImgUrl,
    content: `          <h1>The Problem with Plastic.</h1>
          <p>
            Plastics, especially single-use plastics, dominate our daily lives.
            Items like bottles, bags, straws, and packaging often serve a
            purpose for mere minutes but can linger in the environment for
            hundreds of years. Globally, we produce over 300 million tons of
            plastic each year, and a significant portion ends up in our oceans,
            creating massive “plastic islands” that harm marine ecosystems.
            Microplastics, tiny fragments of plastic, even find their way into
            the food we eat and the water we drink, posing health risks to
            humans and animals alike.
          </p>

          <p>
            <strong>Key issues include:</strong>
          </p>
          <ul>
            <li>
              <p>
                Ocean Pollution: Over 8 million tons of plastic waste enter the
                oceans annually, endangering marine life and coral reefs.
              </p>
            </li>
            <li>
              <p>
                Landfill Overflow: Non-biodegradable plastics take up precious
                space in landfills, releasing toxins into the soil and
                groundwater.
              </p>
            </li>
            <li>
              <p>
                Climate Impact: The production and incineration of plastics
                release greenhouse gases, contributing to global warming.
              </p>
            </li>
          </ul>

          <h2>The Solution Lies with Us</h2>

          <p>
            The good news? Each of us has the power to reduce plastic pollution.
            By making simple, conscious choices, we can collectively create a
            significant impact. Here are a few steps we can take:
          </p>

          <ol type="a">
            <li>
              <p>
                Reduce Single-Use Plastics: Opt for reusable items like metal
                straws, cloth bags, and stainless steel bottles.
              </p>
            </li>
            <li>
              <p>
                Choose Eco-Friendly Products: Support brands that use
                biodegradable or recyclable materials for their packaging.
              </p>
            </li>
            <li>
              <p>
                Participate in Recycling: Ensure proper disposal of plastic
                waste and encourage local recycling initiatives.
              </p>
            </li>
            <li>
              <p>
                Educate Others: Spread awareness about the dangers of plastic
                pollution and inspire others to adopt sustainable habits.
              </p>
            </li>
          </ol>

          <h2>Why It Matters</h2>

          <p>By reducing our reliance on plastic, we can:</p>

          <ul>
            <li>
              <p>
                Protect marine and terrestrial ecosystems from irreversible
                damage.
              </p>
            </li>
            <li>
              <p>
                Improve public health by minimizing exposure to microplastics
                and toxins.
              </p>
            </li>
            <li>
              <p>
                Contribute to a circular economy where resources are reused
                rather than discarded.
              </p>
            </li>
            <li>
              <p>Leave a cleaner, healthier planet for future generations.</p>
            </li>
          </ul>

          <h2>Our Commitment</h2>
          <p>
            At Ammanah Foundation, we are deeply committed to fighting plastic
            pollution. Through awareness campaigns, community programs, and
            sustainable development projects, we aim to educate and empower
            individuals to make a difference. Our ongoing initiatives, such as
            plastic clean-up drives and workshops on sustainable living, are
            designed to inspire action and foster change.
          </p>
          <h2>Take the First Step</h2>
          <p>
            Let’s work together to make a plastic-free future a reality. Join us
            in our mission by participating in our upcoming event, “Say No to
            Plastic Usage and Save the Planet.” Together, we can build a world
            where sustainability isn’t just an option—it’s the way forward. By
            saying no to plastic today, we can save our planet tomorrow. The
            choice is ours to make—let’s choose wisely.
          </p>`,
  };
  const sanitizedContent = DOMPurify.sanitize(blog.content);
  return (
    <>
      <section className={`mainGrid ${style.blogHeader}`}>
        <div className="content firstSectionGap">
          <time dateTime={blog.dateTime}>{blog.date}</time>
          <h1 className={style.title}>{blog.title}</h1>
          <p className={style.subTitle}>{blog.subTitle}</p>
          <div className={style.imgWrapper}>
            <img src={blog.img} alt="" />
          </div>
        </div>
      </section>
      <section className={`mainGrid ${style.blogContent}`}>
        <div className="content">{parse(sanitizedContent)}</div>
      </section>
      <StickyDonateBtn />
    </>
  );
}
