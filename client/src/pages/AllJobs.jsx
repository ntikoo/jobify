import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';
import { useContext, createContext } from 'react';
import { JobsContainer, SearchContainer } from '../components';
import { useLoaderData } from 'react-router-dom';

export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]); 
  try {
    const { data } = await customFetch.get('/jobs', { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
};
const allJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <allJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </allJobsContext.Provider>
  );
};
export const useAllJobsContext = () => useContext(allJobsContext);
export default AllJobs;
