import { fetchDataFromBE } from './actions';

const FetchData = async () => {
  const data = await fetchDataFromBE();

  return (
    <div>
      <div>COMPONENT 2</div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default FetchData;
