import { useLoaderData } from "react-router-dom";
import AllToysRow from "./AllToysRow";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        Toys added by all users
      </h2>
      <div className="overflow-x-auto my-10 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>photo & Name</th>
              <th>Seller Name & Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>View Details</th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
              <AllToysRow key={toy._id} toy={toy}></AllToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllToys;
