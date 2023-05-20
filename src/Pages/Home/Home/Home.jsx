import Banner from "../Banner/Banner";
import PopularItems from "../PopularItems/PopularItems";
import Reviews from "../Reviews/Reviews";
import SubscribeSection from "../SubscribeSection/SubscribeSection";
import ToysSection from "../ToysSection/ToysSection";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <PopularItems></PopularItems>
      <ToysSection></ToysSection>
      <Reviews></Reviews>
      <SubscribeSection></SubscribeSection>
    </div>
  );
};

export default Home;
