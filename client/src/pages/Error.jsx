import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Wrapper from '../assets/wrappers/ErrorPage';
import notFound from '../assets/images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={notFound} alt='not found' className='not-found' />
          <h3>ooh! page not found</h3>
          <p>we can't seem to find the page you are looking for</p>
          <Link to='/dashboard'>back home</Link>
        </div>
      </Wrapper>
    );
  } else {
    return (
      <div>
        <h4>Something else</h4>
      </div>
    );
  }
};

export default Error;
