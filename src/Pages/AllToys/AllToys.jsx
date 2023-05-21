import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";
import { useState } from "react";
import PageTitle from "../PageTitle/PageTitle";

const AllToys = () => {
  const allToys = useLoaderData();

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(allToys);

  const updateTable = (query) => {
    const lowercaseQuery = query.toLowerCase();
    const filteredData = allToys.filter((item) =>
      item.name.toLowerCase().includes(lowercaseQuery)
    );
    setFilteredData(filteredData);
  };
  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);
    updateTable(query);
  };

  return (
    <div>
      <PageTitle title="All Toys" />
      <div className="text-center my-10">
        <input
          onChange={handleSearchChange}
          value={searchQuery}
          type="search"
          placeholder="search by name"
          className="input input-bordered border-purple-600 rounded-2xl w-6/12"
        />
      </div>
      <h2 className="text-5xl font-bold text-center">
        <span className="text-purple-600">Toys</span> added by all users
      </h2>
      <div className="overflow-x-auto my-10 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>No.</th>
              <th>photo, Name & Category</th>
              <th>Seller Name & Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(0, 20).map((toy, index) => (
              <AllToysRow key={toy._id} toy={toy} index={index}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
