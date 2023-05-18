import bannerImg from "../../../../public/banner-img.jpg";

const Banner = () => {
  return (
    <div>
      <div>
        <h1>
          PowerPacked Heroes: Unleash Your Imagination at the Ultimate Action
          Figure Emporium!
        </h1>
      </div>
      <img src={bannerImg} alt="" />
    </div>
  );
};

export default Banner;
