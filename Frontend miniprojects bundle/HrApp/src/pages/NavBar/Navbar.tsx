import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { StyledNavbar } from './StyledNavigationElements';

function Navbar() {
  const location = useLocation();
  const LeftShouldBeatFade = location.pathname === '/view-charts'
  const RightShouldBeatFade = location.pathname === '/'
  
  return (
    <StyledNavbar>
      <Link to="/" className="nav-link">
        <FontAwesomeIcon icon={faArrowLeft} beatFade={LeftShouldBeatFade} size='2xl' />
      </Link>
      <Link to="/view-charts" className="nav-link">
        <FontAwesomeIcon icon={faArrowRight} beatFade={RightShouldBeatFade} size='2xl' />
      </Link>
    </StyledNavbar>
  );
}

export default Navbar;
