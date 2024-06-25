import { fetchDataFromBE } from './actions';

const FetchData = async () => {
  const { data } = await fetchDataFromBE();

  return (
    <div className='flex flex-wrap items-center gap-x-4'>
      {data ? data.map(item => <div key={item}>{item}</div>) : null}
    </div>
  );
};

export default FetchData;
