import { Link } from '@tanstack/react-router';
import Arrow from '../assets/images/Arrow.svg?react';
import style from '../styles/modules/components/eventGrid.module.scss';
const EventGrid = ({
  wrapperClass = 'mainGrid',
}: {
  wrapperClass?: string;
}) => {
  const events = [
    {
      date: { day: 23, mth: 'sep', dateTime: '2024-09-23' },
      tag: 'Next Events',
      title: 'Say no to plastic usage and save the planet',
      id: '1',
    },
    {
      date: { day: 25, mth: 'sep', dateTime: '2024-09-23' },
      tag: 'Next Events',
      title: 'Weekly cleaning program',
      id: '2',
    },
  ];
  return (
    <section className={`${wrapperClass} ${style.events}`}>
      <div className="content">
        <div className="lineAfter">
          <h1>Our Events</h1>
          <div className="line" />
        </div>
        <div className={style.eventGrid}>
          {events.map((event, index) => (
            <div
              className={style.eventCard}
              key={event.date.day + event.date.mth + index}>
              <time dateTime={event.date.dateTime}>
                <span className={style.day}>{event.date.day}</span>
                <span className={style.mth}>{event.date.mth}</span>
              </time>
              <div className={style.expo}>
                <div className={style.tag}>{event.tag}</div>
                <div className={style.title}>{event.title}</div>
              </div>
              <div className={style.arrowbtn}>
                <Link
                  to="/events/$eventId"
                  params={{ eventId: event.id }}
                  style={{ display: 'contents' }}>
                  <Arrow />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGrid;
