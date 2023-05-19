import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import ToysSection from "../ToysSection/ToysSection";

const Home = () => {
  const allToys = useLoaderData();

  const avengers = allToys.filter((toy) => toy.category === "Avengers");

  return (
    <div>
      <Banner></Banner>
      <ToysSection></ToysSection>
    </div>
  );
};

export default Home;
