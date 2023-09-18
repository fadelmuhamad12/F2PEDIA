import Banners from "./components/Banners/Banners";
import Browse from "./components/Browse/Browse";
import Carousel from "./components/Carousel/Carousel";
import Reviews from "./components/CustReviews/Reviews";
import LatestOffer from "./components/LatestOffer/LatestOffer";
import NavigationBar from "./components/Navbar/NavigationBar";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import TopSelling from "./components/TopSelling/TopSelling";

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
      
    </div>
  );
}

export default App;
