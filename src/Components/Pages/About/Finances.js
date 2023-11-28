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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import{
  faFilePdf
} from "@fortawesome/free-solid-svg-icons";
import StatutPdf from '../../../Assets/pdf/statut_2016.pdf';

const Finances = () => {
  
  const downloadPdf = () => {
    const link = document.createElement('a');
    link.download = 'Statut.pdf';
    link.href = StatutPdf;
    link.click();
  };

  return (
    <div className='financesBody'>
      <h2>
        Sprawozdania finansowe oraz statut
      </h2>

      <div className='statuteContent'>
        <h3>Statut Stowarzyszenia Rodzin i Przyjaciół Dzieci z Zespołem Downa „Iskierka”</h3>
        <button onClick={downloadPdf}>
          <h3>Pobierz statut</h3>
        </button>
      </div>

      <VerticalTimeline>
        {finances.map((t, i) => {
          const arrowStyle =
              i % 2 === 0
              ? { borderRight: '7px solid vertical-timeline-element-content-arrow' }
              : undefined;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work"
              contentArrowStyle={arrowStyle}
              {...t.icon}
            >
            <h2>Rok {t.year}</h2>
            <React.Fragment>
              {t.files?.map((file) => {
                return <Link className='pdfLinkFlex' to={file.url}>
                    <FontAwesomeIcon icon={faFilePdf} size="2xl" style={{color: "#a80022",}} />
                    <p>{file.name}</p>
                </Link>
              })}
            </React.Fragment>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
export default Finances;