import bannerImg from "../../../../src/assets/banner-img.jpg";

const Banner = () => {
  return (
    <div className="md:flex  items-center shadow-lg mb-10 rounded">
      <div className="ml-5" data-aos="fade-right">
        <h1 className="md:text-5xl text-3xl w-11/12 md:w-9/12 font-extrabold">
          <span className="text-purple-600">PowerPacked Heroes:</span> Unleash
          Your Imagination at the Ultimate Action Figure Emporium!
        </h1>
        <h5 className="md:text-2xl text-lg w-11/12 md:w-10/12 my-10">
          Lonsectetur adipisicing elit. Praesentium libero at voluptas ad quae
          nesciunt eligendi, eius sequi itaque aliquam, quis in officiis,
          repellat aut harum pariatur expedita maxime veniam enim quisquam,
          Quibusdam similique ab reiciendis.
        </h5>
        <button
          className="btn md:h-16 md:w-48 text-xl text-white btn-outline bg-purple-600 hover:bg-purple-900 border-purple-600"
          data-aos="zoom-in"
          data-aos-duration="3000"
        >
          Shop Now
        </button>
      </div>
      <img className="md:w-4/12" src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
