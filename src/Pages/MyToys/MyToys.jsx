import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import PageTitle from "../PageTitle/PageTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("true");

  const handleSorting = () => {
    setSort(!sort);
  };

  const url = `https://hero-dungeon-server.vercel.app/allToys?email=${user?.email}&sort=${sort}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [url, sort]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://hero-dungeon-server.vercel.app/allToys/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your toy has been deleted", "success");
              const remainingToys = myToys.filter((toy) => toy._id !== id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <div className="my-20">
      <PageTitle title="My Toys" />
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
              <th className="text-lg">photo & Name</th>
              <th className="text-lg">Seller Name & Email</th>
              <th>
                <input
                  onChange={handleSorting}
                  type="checkbox"
                  className="toggle bg-purple-600"
                />
              </th>
              <th className="text-lg">Quantity</th>
              <th className="text-lg">Details</th>
              <th className="text-lg">Edit</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((toy) => (
              <MyToysRow
                key={toy._id}
                toy={toy}
                handleDelete={handleDelete}
              ></MyToysRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
