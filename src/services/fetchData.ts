/**
 * Basic fetch to a placeholder API
 */
export const fetchData = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');

  if (!res.ok) {
    throw new Error('There was an error.');
  }

  return res.json();
};
