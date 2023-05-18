import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);

  const url = `http://localhost:5000/allToys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, []);

  return (
    <div>
      <h2 className="text-5xl font-bold text-center">
        All the Toys added by{" "}
        <span className="text-purple-600">{user.displayName}</span>
      </h2>
      <div className="overflow-x-auto my-10 w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>Delete</label>
              </th>
              <th>photo & Name</th>
              <th>Seller Name & Email</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Details</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysRow key={toy._id} toy={toy}></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
