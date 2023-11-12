import TeddyPic from '../assets/Teddy1.jpg';


const Teddy = () => {
    return ( 
        <div>
            <img src= {TeddyPic} alt="Teddy" id="adoptable cat Teddy" height="300px" width="250px" />
            <h3><i>Teddy</i></h3>
            <p>
              AKA: Starvin Marvin! This boy demands attention and food at every
              turn. He's very social, affectionate and easily trainable if food is
              involved. </p> 
              <p>This smart boy has learned several tricks, including:
              sit, touch and high-five!</p>
        </div>
     );
}
 
export default Teddy;