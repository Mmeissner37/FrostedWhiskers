import Title from "../assets/CatCafe2.jpg";
import "../App.css";

const TitleImage = () => {
    return ( 
        <div>
            <img src={Title} alt="cat on counter with coffee" height="425px" width="1000px"/>
            <div class ="title">
                <h1 id="cafe-name">Frosted Whiskers</h1>
                <h2>Cat Café and Pâtisserie</h2>
            </div>
        </div>
    )
}

export default TitleImage;