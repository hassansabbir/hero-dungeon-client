import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import PageTitle from "../PageTitle/PageTitle";

const AddAToy = () => {
  const { user } = useContext(AuthContext);

  const addAToy = (event) => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const category = form.category.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const details = form.details.value;
    const newToy = {
      photo,
      name,
      sellerName,
      sellerEmail,
      category,
      price,
      rating,
      quantity,
      details,
    };
    console.log(newToy);

    fetch("https://hero-dungeon-server.vercel.app/allToys", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "New Toy Added Successfully",
            icon: "success",
            confirmButtonText: "Done",
          });
        }
      });
  };

  return (
    <form onSubmit={addAToy} className="hero bg-base-200">
      <PageTitle title="Add A Toy" />
      <div className="hero-content  ">
        <div className="card shadow-2xl bg-base-100">
          <h1 className="text-5xl text-purple-600 text-center my-5 font-bold">
            Add A Toy
          </h1>
          <div className="card-body w-[800px]">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="photo url"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Name</span>
              </label>
              <input
                type="text"
                name="sellerName"
                defaultValue={user?.displayName}
                placeholder="seller name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Seller Email</span>
              </label>
              <input
                type="text"
                name="sellerEmail"
                defaultValue={user?.email}
                placeholder="seller email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Sub Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="category"
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
                placeholder="price"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="rating"
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
                placeholder="quantity"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Detail description</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="details"
                className="input input-bordered"
              />
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

export default AddAToy;
