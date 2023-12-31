import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPeopleGroup,
  faSchool,
  faStar,
} from '@fortawesome/free-solid-svg-icons';

const peopleGroupIcon = {
    icon: <FontAwesomeIcon icon={faPeopleGroup} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  };
  const schoolIcon = {
    icon: <FontAwesomeIcon icon={faSchool} />,
    iconStyle: { background: 'rgb(233, 30, 99)', color: '#fff' },
  };
  const starIcon = {
    icon: <FontAwesomeIcon icon={faStar} />,
    iconStyle: { background: 'rgb(16, 204, 82)', color: '#fff' },
  };

const timeline = [
    {
      icon: peopleGroupIcon,
      date: '2013',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: peopleGroupIcon,
      date: '2014',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: peopleGroupIcon,
      date: '2015',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: peopleGroupIcon,
      date: '2016',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: schoolIcon,
      date: '2017',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: schoolIcon,
      date: '2018',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: schoolIcon,
      date: '2023',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    { 
        icon: peopleGroupIcon, 
        date: 'Aktualnie',
        title: 'Przykładowy tytuł',
        subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
];

export default timeline;