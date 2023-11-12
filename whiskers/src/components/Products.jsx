import Bumblebee from '../assets/BumbleBee.jpg';
import Dragonfly from '../assets/Dragonfly.jpg';
import Lightning from '../assets/LightningRod.jpg'
import Shrimp from '../assets/SummerShrimp.jpg';
import Puff from '../assets/PuffCatty.jpg';
import Pom from '../assets/PolychromePom.jpg';
import "../App.css";


const Products = () => {
    return ( 
        <div class="grid-container">
          <div class="grid-item">
            <img src= {Bumblebee} alt="bumblee cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Bumblee Bee</h4>
          </div>
          <div class="grid-item">
            <img src= {Dragonfly} alt="dragonfly cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Dragon Fly</h4>
          </div>
          <div class="grid-item">
            <img src= {Lightning} alt="lightning rod cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Ligtning Rod</h4>
          </div>
          <div class="grid-item">
            <img src= {Pom} alt="polychrome cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Polychrome Pom</h4>
          </div>
          <div class="grid-item">
            <img src= {Puff} alt="feather cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Puffy Cat</h4>
          </div>
          <div class="grid-item">
            <img src= {Shrimp} alt="colorful shrimp cat toy" id="cat-toy" height="250px" width="250px" />
            <h4>Summer Shrimp</h4>
          </div>
        </div>
     );
}
 
export default Products;