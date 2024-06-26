'use client';

import { useNotifications } from '@/data/stores/useNotifications';
import { LucideLoaderCircle } from 'lucide-react';
import { FC, useState } from 'react';
import { useQuery } from 'react-query';
import { postDataToBE } from './actions';

const TriggerFetchData: FC = () => {
  const [input, setInput] = useState<string | undefined>(undefined);

  const { isLoading, refetch } = usePostDataToBE({ input });

  return (
    <div className='my-4 flex gap-x-8'>
      <input
        type='text'
        className='rounded-md border p-2 shadow-md'
        onChange={e => setInput(e.target.value)}
      />
      <button
        onClick={() => refetch()}
        disabled={isLoading}
        className='rounded-md bg-emerald-500 px-4 py-2 text-xl font-semibold uppercase tracking-wide text-white shadow-sm transition-all hover:bg-emerald-600 active:scale-95 disabled:bg-zinc-400'>
        {isLoading ? <LucideLoaderCircle /> : 'Add Data'}
      </button>
    </div>
  );
};

export default TriggerFetchData;

type Props = {
  input: string | undefined;
};
const usePostDataToBE = ({ input }: Props) => {
  const { showNotification } = useNotifications();

  return useQuery({
    queryKey: ['posts'],
    queryFn: () => postDataToBE(input),
    onSuccess: () => {
      showNotification({
        severity: 'success',
        summary: 'Data added successfully',
        detail: 'Data has been added to the backend',
      });
    },
    onError: () => {
      showNotification({
        severity: 'error',
        summary: 'Error adding data',
        detail: 'Error adding data to the backend',
      });
    },
    enabled: false,
  });
};
