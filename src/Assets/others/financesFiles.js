import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFile,
} from '@fortawesome/free-solid-svg-icons';

const fileIcon = {
    icon: <FontAwesomeIcon icon={faFile} />,
    iconStyle: { background: 'rgb(33, 150, 243)', color: '#fff' },
  };

const pdfFiles = [
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/2774?reporttypeId=13',
        year: '2013',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/7709?reporttypeId=13',
        year: '2014',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/12388?reporttypeId=13',
        year: '2015',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/16741?reporttypeId=13',
        year: '2016',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/21713?reporttypeId=13',
        year: '2017',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/3956?reporttypeId=37',
        year: '2018',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/9106?reporttypeId=37',
        year: '2019',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/14462?reporttypeId=37',
        year: '2020',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/18224?reporttypeId=37',
        year: '2021',
    },
    {
        icon: fileIcon,
        url: 'https://sprawozdaniaopp.niw.gov.pl/Search/Print/20470?reporttypeId=37',
        year: '2022',
    },
]
export default pdfFiles