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
      date: '2005',
      title: 'Założenie Iskierki',
      subtitle: 'Ważny krok',
      desc: 'Grupa ludzi zakłada Stowarzyszenie Iskierka',
    },
    {
      icon: peopleGroupIcon,
      date: '2007',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: peopleGroupIcon,
      date: '2010',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: peopleGroupIcon,
      date: '2012',
      title: 'Przykładowy tytuł',
      subtitle: 'Krótki opis',
      desc: 'Długi opis całego wydarzenia',
    },
    {
      icon: schoolIcon,
      date: '2015',
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