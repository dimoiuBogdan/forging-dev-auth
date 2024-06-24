'use client';

import { useState } from 'react';
import { fetchDataFromBE } from './actions';

const FetchDataClick = () => {
  const [data, setData] = useState<any>(null);

  return (
    <div
      onClick={async () => {
        const res = await fetchDataFromBE();

        setData(JSON.stringify(res));
      }}>
      FetchDataClick - {data}
    </div>
  );
};

export default FetchDataClick;
