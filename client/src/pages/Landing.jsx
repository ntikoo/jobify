import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            Job <span>tracking </span>App
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            earum tenetur in consequuntur, at ex sit reprehenderit fuga hic quis
            corporis. Facere voluptate amet cupiditate, corporis praesentium
            earum cumque aspernatur.
          </p>
          <Link to='register' className='btn register-link'>
            Register
          </Link>
          <Link to='login' className='btn'>
            Login / demo user
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
