import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import timeline from '../../../Assets/others/timelineData';
import '../../Styles/HistoryTimeline.css'

const History = () => {
  return (
    <div className='body'>
      <h2>
        Nasza Historia
      </h2>
      <VerticalTimeline>
        {timeline.map((t, i) => {
          const arrowStyle =
            i % 2 === 0
            ? { borderRight: '7px solid vertical-timeline-element-content-arrow' }
            : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentArrowStyle={arrowStyle}
              date={t.date}
              {...t.icon}
            >
              {t.title ? (
                <React.Fragment>
                  <h3 className="vertical-timeline-element-title">{t.title}</h3>
                  {t.subtitle && (
                    <h4 className="vertical-timeline-element-subtitle">
                      {t.subtitle}
                    </h4>
                  )}
                  {t.desc && <p>{t.desc}</p>}
                </React.Fragment>
              ) : undefined}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default History;
