import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import PageTitle from "../PageTitle/PageTitle";

const UpdateToys = () => {
  const toy = useLoaderData();
  const { _id, photo, name, price, quantity, details } = toy;
  console.log(toy);

  const handleUpdateToy = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const updateToy = {
      photo,
      name,
      price,
      quantity,
      details,
    };
    console.log(updateToy);

    fetch(`http://localhost:5000/allToys/${_id}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success",
            text: "Toy updated successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <form onSubmit={handleUpdateToy} className="hero bg-base-200">
      <PageTitle title="Update Toy" />
      <div className="hero-content  ">
        <div className="card shadow-2xl bg-base-100">
          <div className="text-4xl text-purple-600 text-center my-5 font-bold">
            <h1>Update {name} toy</h1>
            <img className="w-36 mx-auto mt-5" src={photo} alt="" />
          </div>
          <div className="card-body w-[800px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                defaultValue={photo}
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Price</span>
              </label>
              <input
                type="text"
                name="price"
                defaultValue={price}
                placeholder="price"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Available Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                defaultValue={quantity}
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>

              <textarea
                name="details"
                placeholder="details"
                defaultValue={details}
                className="border p-5"
                cols="30"
                rows="5"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-purple-600">Add Toy</button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default UpdateToys;
