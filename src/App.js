import "./App.scss";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import Firstslide from "./assets/Living-room-sofa-purple-style_2560x1440.jpg";
import Secondslide from "./assets/thumb2-stylish-interior-of-the-living-room-design-modern-design-blue-sofa-stylish-blue-floor-lamp.jpg";
import Thirdslide from "./assets/sofa-wallpaper-49071-50728-hd-wallpapers.jpg";
import { Button } from "react-bootstrap";
import MainNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MainNavbar />
      <Carousel fade className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={Firstslide} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Secondslide} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Thirdslide} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="main-card">
        <div className="card-text">
          <h1>Get the best products with MyShopy</h1>
          <h3>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem
          </h3>
        </div>
        <Link to="/products">
          <Button href="/products" className="card-button">
            Start Shopping Now
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default App;
