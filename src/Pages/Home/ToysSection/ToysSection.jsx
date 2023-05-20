import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ToyCard from "./ToyCard";

const ToysSection = () => {
  const allToys = useLoaderData();
  console.log(allToys);

  const avengers = allToys.filter((toy) => toy.category === "Avengers");
  const marvel = allToys.filter((toy) => toy.category === "Marvel");
  const transformers = allToys.filter((toy) => toy.category === "Transformers");

  return (
    <div className="my-10 w-11/12 mx-auto">
      <h1
        data-aos="zoom-in"
        data-aos-duration="3000"
        className="text-xl md:text-5xl font-extrabold text-center my-10"
      >
        Out Products By <span className="text-purple-600 italic">Category</span>
      </h1>
      <Tabs>
        <TabList className="text-center mx-auto my-10 text-3xl">
          <Tab>The Avengers</Tab>
          <Tab>Marvel</Tab>
          <Tab>Transformers</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {avengers.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {marvel.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {transformers.map((toy) => (
              <ToyCard key={toy._id} toy={toy}></ToyCard>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ToysSection;
