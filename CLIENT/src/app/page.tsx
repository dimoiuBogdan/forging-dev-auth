import { FC, Suspense } from 'react';
import FetchData from './FetchData';
import TriggerFetchData from './TriggerFetchData';

const Homepage: FC = () => {
  return (
    <>
      <TriggerFetchData />
      <Suspense fallback={<div>Loading fetch data...</div>}>
        <FetchData />
      </Suspense>
    </>
  );
};

export default Homepage;
