import Misc from "../lib/data/layout.json";
import HeroArea from "../home/HeroArea";
import FeaturedPromo from "../home/FeaturedPromo";
import CategoriesList from "../home/CategoriesList";
import DiscountOffers from "../home/DiscountOffers";
import CustomerReviews from "../home/Testimononial";

const Home = () => {
  const productItems = Misc.filter((item) => item.type === 77).map((el) => ({
    data: el.data,
    objects: el.objects,
  }));

  return (
    <div className="">
      <HeroArea />
      <FeaturedPromo />
      <CategoriesList />
      <DiscountOffers />
      <CustomerReviews />
      {/* <ProductCard />
      <ProductCard3 /> */}
      {/* <ChocolatePage />
      <Mithai /> */}
      {/* <HighlightedPromo/> */}
      {/* {productItems.map((products, i) => (
        <ProductsRow key={i} {...products} />
      ))} */}
    </div>
  );
};

export default Home;
