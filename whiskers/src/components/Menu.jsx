import '../App.css';
import MenuBackground from "../assets/Coffee-background.jpg";
import CupCat from '../assets/Cat_in_cup.jpg';


const MenuItems = () => {
    return ( 
        <div class="menu">
          <h3 id="menu">Menu</h3>
          <hr/>
            <p>Are you craving a delicious coffee?</p>
            <p>Want a homemade pastry without the mess?</p>
            <p>Then come on down to Old Town Winchester!</p>
            <p>The delicious joy of caffeine, sweets, and playing with cats.</p>
            <p>There's nothing sweeter! <img src= {CupCat} alt="cat in a cup" height= "50px" width="50px" /></p>
          <br/>
          <div id="menu-whole">
          <div class="coffee">
            <img src= {MenuBackground} alt="coffe bean background" height="600px" width="550px"/>
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
     );
}
 
export default MenuItems;