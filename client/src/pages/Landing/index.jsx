import { Link } from "react-router-dom";
import { 
  StyledPageContainer,
  StyledNav,
  StyledPage,
  StyledHeader,
  StyledText, 
  StyledButtonLink, 
  StyledRegisterLink, 
  StyledImage } from "./styles";
import {Logo} from '../../components';
import main from '../../assets/images/car.svg';
const Landing = () => {
  return (
    <StyledPageContainer>
      <StyledNav>
        <Link to='/'>
          <Logo/>
        </Link>
      </StyledNav>
      <StyledPage>
        <div className="info">
          <StyledHeader>Find <span>Car</span> app</StyledHeader>
          <StyledText>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam numquam at placeat magni officia omnis, quos ex excepturi hic, aliquid pariatur voluptates, repudiandae debitis cupiditate? Ad est accusantium alias.</StyledText>
          <StyledRegisterLink to="/register" className='btn'>Register</StyledRegisterLink>
          <StyledButtonLink to="/register" className='btn'>Login /Demo User</StyledButtonLink>
        </div>
        <StyledImage src={main} alt="Job main pic" className='img'/>
      </StyledPage>
    </StyledPageContainer>
  )
}

export default Landing;