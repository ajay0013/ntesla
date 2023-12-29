import "./Home.css";
import Navbar from "../components/Navbar";
import Homepage from "../components/Homepage";
import Models from "../components/Vehicles/Models";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      {/* <Homepage /> */}
      <Models />
    </div>
  );
}