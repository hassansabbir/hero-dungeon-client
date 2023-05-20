import bgImg from "../../../../src/assets/6345388_3254134.jpg";
import { HiMail } from "react-icons/hi";

const SubscribeSection = () => {
  return (
    <div
      className="relative my-20 shadow-xl"
      data-aos="zoom-in"
      data-aos-duration="2000"
    >
      <img className="h-[500px]  md:w-full" src={bgImg} alt="" />
      <div className="absolute top-0 text-purple-600 right-0 bg-gradient-to-b h-[500px] md:pt-10 w-full from-white">
        <HiMail className="h-28 mx-auto w-28" />
        <h2 className="text-2xl md:text-5xl font-extrabold text-center">
          Subscribe Our Newsletter
        </h2>
        <p className="text-2xl w-2/3 mx-auto my-5 text-center font-bold">
          Iplor sit amet consectetur adipisicing elit. Eveniet suscipit nobis in
          perferendis quam qui.
        </p>
        <div className="text-center space-y-5 my-5">
          <input
            className="h-14 md:w-9/12 border rounded-xl pl-10"
            placeholder="Enter your email address"
            type="email"
            name="email"
            id=""
          />
          <br />
          <button className="btn bg-purple-600 border-none">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
