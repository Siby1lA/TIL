import { useQuery } from "react-query";

function Home() {
  const { data, isLoading } = useQuery(["movies", "nowPlaying"]);
  return <div style={{ backgroundColor: "whitesmoke", height: "200vh" }}></div>;
}
export default Home;
