import './App.css';


function App() {
  return (
    <div className="App">
      <div class="nav-bar">
        <header id="header" class="header">
          <ul>
            <a class="nav-link" href="#about-welcome"><strong>About</strong></a>
            <a class="nav-link" href="#menu"><strong>Menu</strong></a>
            <a class="nav-link" href="#products"><strong>Products</strong></a>
            <a class="nav-link" href="#meet_our_adoptable_cats"><strong>Meet Our Cats</strong></a>
            <a class="nav-link" href="#local_rescues"><strong>Local Rescues</strong></a>
          </ul>
        </header>
      </div>
      <div class="container">
        <div>
          <img src="./Components/CatCafe2.jpg" alt="cat on counter with coffee" height="425px" width="1000px"/>
          <div class="title">
            <h1 id="cafe-name">Frosted Whiskers</h1>
            <h2>Cat Café and Pâtisserie</h2>
          </div>
        </div>
        <div class="about">
          <h3 id="about-welcome"><strong>Welcome fellow cat lovers!</strong></h3>
          <p>
            Located in the Shenandoah Valley, we are the first cat café in the
            Winchester, VA area!
          </p>
          <p>
            We work with local feline rescues, such as SPCA NOVA, Dakota’s Dream
            Animal Rescue and Frederick County Esther Boyd Animal Shelter, to
            house adoptable cats in need of homes.
          </p>
          <p>
            You'll find a delicious menu of coffee and homemade pastries, along
            with a selection of products to enrich your feline friend's life. Each
            purchase provides financial support for our cats. Extra proceeds are
            donated to <a href="#local_rescues">local rescues</a>.
          </p>
        </div>
        <div class="menu">
          <h3 id="menu">Menu</h3>
          <hr/>
            <p>Are you craving a delicious coffee?</p>
            <p>Want a homemade pastry without the mess?</p>
            <p>Then come on down to Old Town Winchester!</p>
            <p>The delicious joy of caffeine, sweets, and playing with cats.</p>
            <p>There's nothing sweeter! <img src="./Components/Cat_in_cup.jpg" alt="cat in a cup" height= "50px" width="50px" /></p>
          <br/>
        <div id="menu-whole">
          <div class="coffee">
            <img src="./Components/Coffee-background.jpg" alt="coffe bean background" height="600px" width="550px"/>
            <div class="items">
              <ul><strong>Abyssianian</strong> -- Coffee and 3 shots espresso</ul>
              <ul><strong>Persian</strong> -- Espresso and steamed milk</ul>
              <ul><strong>Scottish Fold</strong> -- Espresso, milk chocolate, and steamed milk</ul>
              <ul><strong>American Curl</strong> -- Espresso and hot water</ul>
              <ul><strong>Burmese</strong> -- Espresso, steamed milk and foam</ul>
              <ul><strong>Maine Coon</strong> -- Coffee and steamed milk</ul>
              <ul><strong>Devon Rex</strong> -- 1oz espresso</ul>
              <ul><strong>Manx</strong> -- Espresso, white chocolate, caramel and steamed milk</ul>
              <ul><strong>Savannah</strong> -- 5 shots espresso, dark chocolate, coffee, steamed milk</ul>
              <ul><strong>Egyptian Mau</strong> -- Chai and steamed milk</ul>
              <ul><strong>Siamese</strong> -- Chai, 2 shots espresso and steamed milk</ul>
              <p id="coffee-maker">
                All coffee is made using
                <a href="https://www.kittytowncoffee.com/">Kitty Town Coffee</a>
              </p>
              <ul>**All pastries are made fresh daily. Please come on over to view available selections**</ul>
            </div>
          </div>
        </div>
        </div>
        <br />
      <hr />
      <div class="products">
        <h3 id="products">Products</h3>
        <hr />
        <p>Want to visit with our wonderful and adoptable kitties?</p>
        <p>
          Here's a small example of the toys availble for use. All toys can be
          purchased in-house or through
          <a href="https://www.christhecat.com/">ChrisTheCat</a>
        </p>
        <p>
          All proceeds go to local rescues. <a href="#local_rescues">See below</a> for
          those we work with
        </p>
        <div class="grid-container">
          <div class="grid-item">
            <img
              src="./assets/BumbleBee.jpg"
              alt="bumblee cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Bumblee Bee</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/Dragonfly.jpg"
              alt="dragonfly cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Dragon Fly</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/LightningRod.jpg"
              alt="lightning rod cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Ligtning Rod</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/PolychromePom.jpg"
              alt="polychrome cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Polychrome Pom</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/PuffCatty.jpg"
              alt="feather cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Puffy Cat</h4>
          </div>
          <div class="grid-item">
            <img
              src="./assets/SummerShrimp.jpg"
              alt="colorful shrimp cat toy"
              id="cat-toy"
              height="250px"
              width="250px"
            />
            <h4>Summer Shrimp</h4>
          </div>
        </div>
      </div>
      <br />
      <hr />
      </div>
    </div>
  );
}

export default App;
