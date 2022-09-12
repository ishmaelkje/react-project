import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import Contact from "./components/Contact";
import Carousel from "./components/Carousel";
import Feedback from "./components/FeedBack";

const App = () => {
  return (
    <div>
      <NavBar />
      <Carousel />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  );
};

export default App;
