import Banners from "./components/Banners/Banners";
import Browse from "./components/Browse/Browse";
import Carousel from "./components/Carousel/Carousel";
import NavigationBar from "./components/Navbar/NavigationBar";
import NewArrivals from "./components/NewArrivals/NewArrivals";
import TopSelling from "./components/TopSelling/TopSelling";

function App() {
  return (
    <>
      <NavigationBar />
      <Carousel />
      <Banners />
      <NewArrivals />
      <TopSelling />
      <Browse />
      
    </>
  );
}

export default App;
