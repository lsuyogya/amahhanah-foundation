import { createFileRoute } from "@tanstack/react-router";
import highlight1 from "../../assets/images/projectHighlight1.png";
import highlight2 from "../../assets/images/projectHighlight2.png";
import highlight4 from "../../assets/images/projectHighlight4.png";
import highlight5 from "../../assets/images/projectHighlight5.png";
import styles from "../../styles/modules/projectDetail.module.scss";
import projectImgUrl from "../../assets/images/ProjectDesc.png";
import img1 from "../../assets/images/imges1.png";
import img2 from "../../assets/images/imges2.png";
import img3 from "../../assets/images/imges3.png";
import img4 from "../../assets/images/imges4.png";
import img5 from "../../assets/images/imges5.png";
import img6 from "../../assets/images/imges6.png";
import img7 from "../../assets/images/imges7.png";
import img8 from "../../assets/images/imges8.png";
export const Route = createFileRoute("/projects/$projectId")({
  component: RouteComponent,
});

function RouteComponent() {
  const projectHighlights = [
    { iconUrl: highlight1, text: "The Challenge" },
    { iconUrl: highlight2, text: "Key Initiatives" },
    { iconUrl: highlight1, text: "Success Stories" },
    { iconUrl: highlight2, text: "Together we can make difference" },
    { iconUrl: highlight4, text: "Our mission" },
    { iconUrl: highlight5, text: "Our impact" },
    { iconUrl: highlight4, text: "Get Involved" },
  ];
  const imges = [img1, img2, img3, img4, img5, img6, img7, img8];
  return (
    <>
      <section
        className="mainGrid firstSectionGap"
        style={{ marginBlockEnd: 0 }}
      >
        <div
          className="content"
          style={{ maxWidth: "1100px", marginInline: "auto" }}
        >
          <div className="txtWrapper">
            <small className="dashTitle">Our Project</small>
            <h1 className="sectionTitle" style={{ paddingInlineStart: 0 }}>
              Clean Water for All: Transforming Lives Through Access to Safe
              Water
            </h1>
          </div>
          <div className={styles.projectHighlights}>
            {projectHighlights.map((highlight) => (
              <div className={styles.highlight}>
                <img src={highlight.iconUrl} alt="" />
                <strong>{highlight.text}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="mainGridSmall" style={{ marginBlockStart: "2rem" }}>
        <div className="content">
          <div className={styles.projectContent}>
            <p>
              Access to clean water is a basic human right, yet millions of
              people worldwide still struggle to secure this vital resource. At
              Ammanah Foundation, we believe that providing clean and safe water
              is not just a necessity but a foundation for health, education,
              and economic growth. That’s why we launched the Clean Water for
              All project, a transformative initiative aimed at delivering
              sustainable water solutions to communities in need.
            </p>
            <img src={projectImgUrl} alt="" />
            <h2 className="h2">The Challenge</h2>
            <p>
              Globally, over 2 billion people lack access to safe drinking
              water. The consequences are devastating:
            </p>

            <ul>
              <li>
                Health Risks: Waterborne diseases like cholera, dysentery, and
                typhoid claim thousands of lives annually, particularly among
                children.
              </li>
              <li>
                Economic Strain: Hours spent fetching water hinder economic
                productivity, especially for women and children who could
                otherwise attend school or work.
              </li>
              <li>
                Environmental Degradation: Over-extraction of water and poor
                management of water resources exacerbate environmental
                challenges like droughts and deforestation.
              </li>
            </ul>
            <h2 className="h2">Our Mission</h2>
            <p>The Clean Water for All project aims to:</p>

            <ul>
              <li>
                Ensure access to safe and reliable water sources for underserved
                communities.
              </li>
              <li>Promote sustainable water management practices.</li>
              <li>
                Empower communities through education on hygiene and sanitation.
              </li>
            </ul>
            <h2 className="h2">Key Initiatives</h2>
            <p>Building and Restoring Infrastructure</p>
            <ul>
              <li>
                Boreholes and Wells: We construct and rehabilitate wells and
                boreholes to provide clean, groundwater access.
              </li>
              <li>
                Rainwater Harvesting Systems: Installing rainwater collection
                systems for communities in areas with seasonal rainfall.
              </li>
            </ul>

            <p>Water Filtration and Purification</p>
            <ul>
              <li>
                Providing low-cost, portable filtration systems to households
                and schools.
              </li>
              <li>
                Partnering with local governments to establish community-level
                water treatment plants.
              </li>
            </ul>

            <p>Hygiene and Sanitation Education</p>
            <ul>
              <li>
                Conducting workshops to teach communities about the importance
                of hand washing, safe water storage, and proper sanitation.
              </li>
              <li>
                Distributing educational materials and hygiene kits to families
                and schools.
              </li>
            </ul>

            <p>Community Empowerment</p>
            <ul>
              <li>
                Training local water committees to manage and maintain water
                systems.
              </li>
              <li>
                Encouraging community-led initiatives for long-term
                sustainability.
              </li>
            </ul>
            <h2>Our Impact</h2>
            <p>Since its inception, the Clean Water for All project has:</p>

            <ul>
              <li>
                Delivered safe water to over [Insert Number] people across
                [Insert Number] countries.
              </li>
              <li>
                Reduced the incidence of waterborne diseases by [Insert
                Percentage] in target communities.
              </li>
              <li>
                Saved families an average of [Insert Hours] hours per week
                previously spent collecting water.
              </li>
            </ul>
            <h2 className="h2">Success Stories</h2>
            <ul>
              <li>
                In many regions of Nepal, a newly installed borehole now
                provides clean water to over 500 families, transforming lives by
                reducing disease and increasing school attendance.
              </li>
              <li>
                Women-led water committees are empowering local communities to
                sustainably manage their water resources.
              </li>
            </ul>
            <h2 className="h2">Get Involved</h2>
            <p>You can help make clean water a reality for everyone:</p>

            <ul>
              <li>
                Donate: Your contributions directly fund the construction of
                wells, filtration systems, and hygiene education programs.
              </li>
              <li>
                Volunteer: Join us on the ground or support our awareness
                campaigns.
              </li>
              <li>
                Advocate: Raise awareness about the global water crisis and the
                importance of clean water access.
              </li>
            </ul>
            <h2 className="h2">Together, We Can Make a Difference</h2>
            <p>
              Clean water is life. By supporting the Clean Water for All
              project, you are not just providing a vital resource—you are
              transforming communities, promoting health, and creating
              opportunities for a brighter future. Let’s work together to ensure
              that clean water is not a privilege but a right for all.
            </p>
          </div>
        </div>
      </section>
      <section className="mainGrid">
        <div className="content">
          <h1
            className="h1"
            style={{ textAlign: "center", marginBlockEnd: "1rem" }}
          >
            Images
          </h1>
          <div className="card-300-grid" style={{ gap: "0.25rem" }}>
            {imges.map((img) => (
              <div className="card" style={{ aspectRatio: "3 / 2" }}>
                <img
                  src={img}
                  alt=""
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    width: "100%",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
