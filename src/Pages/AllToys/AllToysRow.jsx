import { FaEye } from "react-icons/fa";

const AllToysRow = ({ toy }) => {
  const {
    name,
    photo,
    category,
    sellerName,
    sellerEmail,
    price,
    quantity,
    details,
  } = toy;

  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={photo} alt="" />
            </div>
          </div>
          <div>
            <div className="font-bold text-2xl">{name}</div>
            <div className="text-xl opacity-50">{category}</div>
          </div>
        </div>
      </td>
      <td className="text-xl">
        {sellerName}
        <br />
        <span className="text-xl ">{sellerEmail}</span>
      </td>
      <td className="text-xl">{price} Taka</td>
      <td className="text-xl">{quantity}</td>
      <th>
        <span className="text-xl">{details.slice(0, 25)}...</span>
      </th>
      <th>
        <button className="btn ml-5">
          <FaEye />
        </button>{" "}
        <br />{" "}
      </th>
    </tr>
  );
};

export default AllToysRow;
