import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const PopularItems = () => {
  const [popularToys, setPopularToys] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/popularToys")
      .then((res) => res.json())
      .then((data) => setPopularToys(data));
  }, []);

  return (
    <div className="mb-28 w-full ">
      <h2 className="text-center font-extrabold my-20 text-xl md:text-5xl">
        Our Most <span className="text-purple-600 italic">Popular </span>Toys
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {popularToys.map((toy) => (
          <>
            <div className="card card-compact mx-auto w-11/12 bg-base-100 shadow-xl">
              <figure>
                <img className="rounded-xl h-64 w-64" src={toy.photo} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-3xl text-purple-600 font-bold text-center mx-auto">
                  {toy.name}
                </h2>
                <p className="text-center my-5 text-md">{toy.details}</p>
                <div className="text-xl font-bold">
                  <h3>
                    <span className="text-purple-600">Category:</span>{" "}
                    {toy.category}
                  </h3>
                  <h3>
                    <span className="text-purple-600">Price:</span> ${toy.price}
                  </h3>
                  <h3>
                    <span className="text-purple-600">Quantity:</span>{" "}
                    {toy.quantity} piece
                  </h3>
                  <h3 className="flex items-center gap-2">
                    <span className="text-purple-600">Rating:</span>{" "}
                    {toy.rating}.0
                    <span className="flex">
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                      <FaStar className="text-orange-500" />
                    </span>{" "}
                  </h3>
                </div>
                <div className="card-actions justify-end">
                  <button className="btn bg-purple-600 border-none">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default PopularItems;
