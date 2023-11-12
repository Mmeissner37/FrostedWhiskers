import DakotasDream from "../assets/Dakotas_Dream_Logo.png";
import SPCA from "../assets/SPCA-NOVA-Logo.png";
import Esther from "../assets/FCAS.jpg";


const RescueGroups = () => {
    return ( 
      <div class="local_rescues">
        <h3 id="local_rescues">Local Rescues</h3>
      <hr />
      <div class="grid-container2">
          <div class="grid-item2">
              <h4>Dakota's Dream</h4>
              <a href="http://dakotasdream.org/"><img src= {DakotasDream} alt="Dakota's Dream Logo"/></a>
          </div>
          <div class="grid-item2">
              <h4>SPCA Nova</h4>
              <a href="https://spcanova.org/"><img src= {SPCA} alt="SPCA Nova Logo"/></a>
          </div>
          <div class="grid-item2">
              <h4>Frederick County Esther Boyd Animal Shelter</h4>
              <a href="https://www.fcva.us/departments/animal-shelter"><img src= {Esther} height="250px" width="250px" alt="FCEB Shelter Logo"/></a>
          </div>
        </div>
        </div>
    );
}
 
export default RescueGroups;