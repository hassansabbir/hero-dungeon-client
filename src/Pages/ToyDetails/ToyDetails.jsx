import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const singleToyDetails = useLoaderData();
  const {
    photo,
    name,
    category,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    details,
  } = singleToyDetails;
  console.log(singleToyDetails);

  return (
    <div className="my-10 shadow-lg ">
      <img className="w-80 my-5 mx-auto" src={photo} alt="" />
      <h2 className="text-6xl text-purple-600 font-bold text-center">{name}</h2>
      <h3 className="text-center text-3xl">{category}</h3>
      <p className="text-center mx-auto text-2xl my-10 w-9/12">{details}</p>
      <div className="text-2xl font-bold ml-80 my-10">
        <h3>
          <span className="text-purple-600">Seller:</span> {sellerName}
        </h3>
        <h3>
          <span className="text-purple-600">Email:</span> {sellerEmail}
        </h3>
        <h3>
          <span className="text-purple-600">Price:</span> ${price}
        </h3>
        <h3>
          <span className="text-purple-600">Quantity:</span> {quantity}
        </h3>
        <div className="flex gap-1 items-center">
          <h3>
            <span className="text-purple-600">Rating:</span> {rating}.0
          </h3>
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
          <FaStar className="text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
