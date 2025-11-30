import "./App.css";
import TitleImage from "./components/Title";
import AboutSection from "./components/About";
import MenuItems from "./components/Menu";
import RescueGroups from "./components/Rescues";
import Evie from "./components/Evie";
import Knack from "./components/Knack";
import Knick from "./components/Knick";
import Teddy from "./components/Teddy";
import Romeow from "./components/Romeow";
import Products from "./components/Products";

function App() {
  return (
    <div className="App">
      <div class="nav-bar">
        <header id="header" class="header">
          <ul>
            <a class="nav-link" href="#about-welcome">
              <strong>About</strong>
            </a>
            <a class="nav-link" href="#menu">
              <strong>Menu</strong>
            </a>
            <a class="nav-link" href="#products">
              <strong>Products</strong>
            </a>
            <a class="nav-link" href="#meet_our_adoptable_cats">
              <strong>Meet Our Cats</strong>
            </a>
            <a class="nav-link" href="#local_rescues">
              <strong>Local Rescues</strong>
            </a>
          </ul>
        </header>
      </div>
      <div class="container">
        <TitleImage />
        <AboutSection />
        <MenuItems />
        <br />
        <hr />
        <div class="products">
          <h3 id="products">Products</h3>
          <hr />
          <p>
            Want to visit and play with our wonderful and adoptable kitties?
          </p>
          <p>
            Here's a small example of the toys availble for use. All toys can be
            purchased in-house or through <br />
            <a href="https://www.christhecat.com/" target="_blank">
              ChrisTheCat
            </a>
          </p>
          <p>
            All proceeds go to local rescues.{" "}
            <a href="#local_rescues">See below</a> for those we work with
          </p>
          <Products />
        </div>
        <br />
        <hr />
        <div class="meet_our_adoptable_cats">
          <h3 id="meet_our_adoptable_cats">Meet Our Adoptable Cats</h3>
          <hr />
          <div class="grid-container">
            <div class="grid-item">
              <Evie />
            </div>
            <div class="grid-item">
              <Knack />
            </div>
            <div class="grid-item">
              <Knick />
            </div>
            <div class="grid-item">
              <Teddy />
            </div>
            <div class="grid-item">
              <Romeow />
            </div>
          </div>
        </div>
        <br />
        <hr />
        <RescueGroups />
        <footer>
          <h5>Copywright © 2023</h5>
          <p>
            This website is a personal project by{" "}
            <a href="https://michaelameissner-portfolio.vercel.app/">
              Michaela Meissner
            </a>{" "}
            and is not an actual cat café.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
