import { Form, redirect, useNavigation, Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { Logo, FormRow, SubmitBtn } from '../components/index';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo />
        <h4>register</h4>
        <FormRow name='name' type='text' />
        <FormRow name='lastName' labelText='Last Name' type='text' />
        <FormRow name='location' type='text' />
        <FormRow name='email' type='email' />
        <FormRow name='password' type='password' />
        <SubmitBtn />
      </Form>

      <p>
        Already a member?
        <Link to='/login' className='member-btn'>
          Login
        </Link>
      </p>
    </Wrapper>
  );
};

export default Register;
