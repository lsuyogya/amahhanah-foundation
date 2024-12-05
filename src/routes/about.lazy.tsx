import { createLazyFileRoute } from '@tanstack/react-router';
import videoUrl from '../assets/videos/randomVid.mp4';
import '../styles/pages/about.scss';
import SupporterSlide from '../components/SupporterSlide';

export const Route = createLazyFileRoute('/about')({
  component: About,
});

function About() {
  return (
    <>
      <section
        className="mainGrid"
        style={{ marginBlock: 'calc(var(--sectionGap) / 2)' }}>
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
          <video
            src={videoUrl}
            className="fullWidthVid"
            controls></video>
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
          <span style={{ textTransform: 'uppercase' }}>Our Supporters</span>
          <SupporterSlide />
        </div>
      </section>
      <section className="mainGrid">
        <div className="content">
          <h1>Awards & Recognition</h1>
        </div>
      </section>
    </>
  );
}
