'use client';

import { LoaderIcon } from 'lucide-react';
import { useQuery } from 'react-query';
import { fetchDataFromBE } from './actions';

const TriggerFetchData = () => {
  const { isLoading, isError, isSuccess, data, error, refetch } = useGetData();

  return (
    <div>
      <button
        onClick={() => refetch()}
        className='rounded-md bg-red-500 px-4 py-2 text-xl font-semibold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-red-600 active:scale-95 disabled:bg-zinc-300'>
        FETCH DATA
      </button>
      <div className='mt-4'>
        {isLoading ? (
          <LoaderIcon />
        ) : isSuccess ? (
          <pre>{JSON.stringify(data, null, 2)}</pre>
        ) : isError ? (
          <div>Something went wrong</div>
        ) : null}
      </div>
    </div>
  );
};

export default TriggerFetchData;

const useGetData = () => {
  return useQuery({
    queryKey: 'getData',
    queryFn: () => fetchDataFromBE(),
    enabled: false,
  });
};
