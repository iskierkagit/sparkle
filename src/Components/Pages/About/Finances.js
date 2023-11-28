import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import finances from '../../../Assets/others/financesFiles';
import '../../Styles/HistoryTimeline.css';
import '../../Styles/Finances.css';
import { Link } from 'react-router-dom';

const Finances = () => {
  return (
    <div className='financesBody'>
      <h2>
        Sprawozdania finansowe
      </h2>
      <VerticalTimeline>
        {finances.map((t, i) => {
          const contentStyle =
          i % 2 === 0
              ? { background: 'rgb(255, 225, 125)' }
              : undefined;
          const arrowStyle =
          i % 2 === 0
              ? { borderRight: '7px solid  rgb(255, 225, 125)' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentStyle={contentStyle}
              contentArrowStyle={arrowStyle}
              {...t.icon}
            >
            <React.Fragment>
              <Link to={t.url}>
                <button>
                  <h3 className="vertical-timeline-element-title">Pobierz sprawozdanie za rok: {t.year}</h3>
                </button>
              </Link>
            </React.Fragment>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default Finances;