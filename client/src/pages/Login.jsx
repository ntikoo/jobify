import {
  Form,
  redirect,
  Navigate,
  Link,
  useActionData,
  useNavigate,
} from 'react-router-dom';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import { FormRow, Logo, SubmitBtn } from '../components';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: '' };
  if (data.password.length < 5) {
    errors.msg = 'password length too short';
    return errors;
  }
  try {
    await customFetch.post('/auth/login', data);
    toast.success('logged in');
    return redirect('/dashboard');
  } catch (error) {
    errors.msg = error?.response?.data?.msg;
    return errors;
  }
};
const Login = () => {
  const errors = useActionData();
  const navigate = useNavigate();

  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    try {
      await customFetch.post('/auth/login', data);
      toast.success('welcome to test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error.response.data.msg);
    }
  };

  return (
    <Wrapper>
      <div className='container'>
        <Form method='post' className='form'>
          <Logo />
          {errors?.msg && <p style={{ color: 'red' }}>{errors.msg}</p>}
          <h4>Login Page</h4>
          <FormRow type='text' name='email' />
          <FormRow type='password' name='password' />
          <SubmitBtn />
          <button
            type='button'
            className='btn btn-block'
            onClick={loginDemoUser}
          >
            Explore the block
          </button>
          <p>
            Not a member yet ?
            <Link to='/register' className='member-btn'>
              Register
            </Link>
          </p>
        </Form>
      </div>
    </Wrapper>
  );
};

export default Login;
