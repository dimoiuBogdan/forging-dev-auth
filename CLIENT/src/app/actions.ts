'use server';

export async function fetchDataFromBE() {
  const API_URL = 'http://localhost:5296/api/base';

  try {
    const response = await fetch(`${API_URL}?param=200`, {
      method: 'GET',
    });

    const data = await response.json();

    return data;
  } catch (error) {
    return 'Error fetching data from BE';
  }
}

export async function postDataToBE() {
  const API_URL = 'http://localhost:5296/api/base';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ param: 200 }),
    });
    const data = await response.json();

    return data;

    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
