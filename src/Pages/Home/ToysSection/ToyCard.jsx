import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const { _id, photo, name, price, rating } = toy;
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={photo}
          alt={name}
          className="rounded-xl h-56 w-76"
          data-aos="zoom-in"
        />
      </figure>
      <div className="card-body items-center text-center" data-aos="zoom-in">
        <h2 className="card-title font-bold text-4xl">{name}</h2>
        <p className="text-2xl font-bold">Price: ${price}</p>
        <p className="mr-1 text-2xl">Rating: {rating}.0</p>
        <div className="flex">
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>

        <div className="card-actions">
          <Link to={`/toyDetails/${_id}`}>
            <button className="btn bg-purple-600">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
