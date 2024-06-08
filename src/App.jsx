import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import Products1 from "./components/Products1";
import Review from "./components/Review";
import Footer1 from "./components/Footer1";

export default function App() {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>
        <div id="menu">
          <Menu />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="products">
          <Products1 />
        </div>
        <div id="review">
          <Review />
        </div>
        <div id="footer">
          <Footer1 />
        </div>
      </main>
    </div>
  );
}
