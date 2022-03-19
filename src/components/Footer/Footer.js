import { Container } from 'reactstrap';
import BottomFooter from './BottomFooter';
import TopFooter from './TopFooter';

const Footer = ({ children }) => {
  return (
    <footer>
      <TopFooter />
      <BottomFooter />
    </footer>
  )
}

export default Footer;