import EviePic from '../assets/Evie1.jpg'


const Evie = () => {
    return ( 
        <div>
            <img src= {EviePic} alt="Evie" id="adoptable cat Evie" height="300px" width="250px" />
            <h3><i>Evie</i></h3>
            <p>
              This chatty catty will charm you with her little chrips and
              trills. A bit independent, but loves food/treats and shoulder
              scritches. She becomes the biggest cuddler if you have chicken or
              ice-cream!
            </p>
        </div>
     );
}
 
export default Evie;