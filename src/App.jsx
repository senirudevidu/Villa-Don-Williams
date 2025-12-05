import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Location from "./Components/Location/Location.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import VisualTour from "./Components/VisualTour/VisualTour.jsx";
import DirectCall from "./Components/DirectCall/DirectCall.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Location />
      <Reviews />
      <VisualTour />
      <DirectCall />
    </>
  );
}

export default App;
