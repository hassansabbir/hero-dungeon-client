import { FaQuoteLeft, FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="my-20 p-3">
      <div>
        <h1 className="text-4xl ml-5 md:text-6xl font-extrabold">
          Excellent user <br />{" "}
          <span className=" text-purple-600 italic">reviews</span>
        </h1>
        <div className="divider w-60 md:w-3/12"></div>
        <p className="text-3xl font-bold md:w-3/6">
          High response time 24/7 and readiness to go the extra mile to satisfy
          your needs shows in the excellent user reviews.
        </p>
      </div>
      <div className="divider w-60 md:w-full"></div>
      <div
        className="md:flex items-center gap-10 my-10"
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <div>
          <h2 className="text-3xl font-bold">chengisIsmail</h2>
          <div className="divider w-60"></div>
          <p className="text-2xl text-center">April 2023</p>
          <div className="flex justify-center">
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
          </div>
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex">
          <FaQuoteLeft className=" w-6/12" />
          <p className="text-2xl">
            Lolor sit amet consectetur adipisicing elit. Libero totam ducimus
            temporibus voluptatem vitae facilis dolore consequuntur. Aut tenetur
            alias odio voluptates! Quas est eius praesentium natus ipsum
            corrupti distinctio dignissimos, dicta nesciunt, tenetur ad. Dolorem
            magnam a, in accusamus nostrum minus dolorum recusandae debitis
            dicta velit quia eligendi laudantium aliquam porro ea harum, dolorem
            facere tenetur. or, sit amet consectetur adipisicing elit.
          </p>
        </div>
      </div>
      <div className="divider w-60 md:w-full"></div>
      <div
        className="md:flex items-center gap-10 my-10"
        data-aos="flip-left"
        data-aos-duration="3000"
      >
        <div className="order-last md:order-first flex">
          <FaQuoteLeft className=" w-6/12" />
          <p className="text-2xl">
            Lolor sit amet consectetur adipisicing elit. Libero totam ducimus
            temporibus voluptatem vitae facilis dolore consequuntur. Aut tenetur
            alias odio voluptates! Quas est eius praesentium natus ipsum
            corrupti distinctio dignissimos, dicta nesciunt, tenetur ad. Dolorem
            magnam a, sapiente nam laborum facilis qui veniam numquam eaque
            perferendis excepturi, nobisolor sit amet consectetur adipisicing
            elit. Eaque aspernatur expedita.
          </p>
        </div>
        <div className="divider divider-horizontal" />
        <div className="order-first md:order-last">
          <h2 className="text-3xl font-bold">issacForgemaster</h2>
          <div className="divider w-60"></div>
          <p className="text-2xl text-center">May 2022</p>
          <div className="flex justify-center">
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
          </div>
        </div>
      </div>
      <div className="divider w-60 md:w-full"></div>
      <div
        className="md:flex items-center gap-10 my-10"
        data-aos="flip-right"
        data-aos-duration="3000"
      >
        <div>
          <h2 className="text-3xl font-bold">vladDraculaTepes</h2>
          <div className="divider w-60"></div>
          <p className="text-2xl text-center">March 2022</p>
          <div className="flex justify-center">
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
            <FaStar className="text-purple-600 h-8 w-8" />
          </div>
        </div>
        <div className="divider divider-horizontal" />
        <div className="flex">
          <FaQuoteLeft className=" w-6/12" />
          <p className="text-2xl">
            Lolor sit amet consectetur adipisicing elit. Libero totam ducimus
            temporibus voluptatem vitae facilis dolore consequuntur. Aut tenetur
            alias odio voluptates! Quas est eius praesentium natus ipsum
            corrupti distinctio dignissimos, Dolorem magnam a, sapiente nam
            laborum facilis qui veniam numquam eaque perferendis excepturi,
            nobisolor Akth kgjhoi dsglor sit amet consectetur adipisicing elit.
            Facere, ex tempore veniam laudantium consectetur distinctio omnis
            iure aperiam eos autem!
          </p>
        </div>
      </div>
      <div className="divider w-60 md:w-full"></div>
    </div>
  );
};

export default Reviews;
