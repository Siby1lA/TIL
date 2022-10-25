import useAxios from "./useAxios";

const App = () => {
  const { loading, data, error, refetch } = useAxios({
    url: "https://yts.mx/api/v2/list_movies.json",
  });
  console.log(`${loading}`);
  return (
    <div>
      <h1>{data && data.satatus}</h1>
      <h2>{loading && "Loading"}</h2>
      <button onClick={refetch}>Refecth</button>
    </div>
  );
};
export default App;
