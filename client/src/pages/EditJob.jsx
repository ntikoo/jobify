import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';

import { JOB_STATUS, JOB_TYPE } from '../../../utils/constants';
import { Form, redirect, useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    return data;
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-jobs');
  }
};
export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const jobData = Object.fromEntries(formData);
  console.log(jobData)
  try {
    await customFetch.patch(`/jobs/${params.id}`, jobData);
    toast.success('job successfully updated');
    return redirect('/dashboard/all-jobs');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
  }
  return null;
};

const EditJob = () => {
  const { job } = useLoaderData(); 
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <h4 className='form-title'>Edit Job</h4>
        <div className='form-center'>
          <FormRow type='text' name='position' defaultValue={job.position} />
          <FormRow type='text' name='company' defaultValue={job.company} />
          <FormRow
            type='text'
            name='location'
            labelText='job location'
            defaultValue={job.location}
          />
          <FormRowSelect
            name='jobStatus'
            labelText='job status'
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name='jobType'
            label='job type'
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn/>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
