import Banners from "./Layout/Banners/Banners";
import Browse from "./Layout/Browse/Browse";
import Carousel from "./Layout/Carousel/Carousel";
import Reviews from "./Layout/CustReviews/Reviews";
import Footer from "./Layout/Footer/Footer";
import LatestOffer from "./Layout/LatestOffer/LatestOffer";
import NavigationBar from "./Layout/Navbar/NavigationBar";
import NewArrivals from "./Layout/NewArrivals/NewArrivals";
import TopSelling from "./Layout/TopSelling/TopSelling";

function App() {
  return (
    <div className="overflow-y-scroll no-scrollbar">
      <NavigationBar />
      <Carousel />
      <Banners />
      <NewArrivals />
      <TopSelling />
      <Browse />
      <Reviews />
      <LatestOffer />
      <Footer />
      
    </div>
  );
}

export default App;
