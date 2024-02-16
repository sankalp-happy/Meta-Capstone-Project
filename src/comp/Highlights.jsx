import photo1 from '../Assets/restauranfood.jpg'
import photo2 from '../Assets/bruchetta.svg'
import photo3 from '../Assets/lemondessert.jpg'
import Card from './Card';
const Highlights = () => {
    const link = [photo1, photo2, photo3];
    const title = ["Greek Saalad", "Brushetta", "Lemon Dessert"];
    const price = ["$12.99", "$5.99", "$5.00"];
    const content = ["The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.", "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ", "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."];
    const comp = [...Array(3).keys()].map((_, i) => <Card key={i} class = {"card card" + i} link = {link[i]} title = {title[i]} price = {price[i]} content = {content[i]}/>)
    return (
        <div className="container">
            <div className="highlight">
                <h1 id="high">This Week specials!</h1>
                <button id="menu"> <a href="#menu">Online Menu</a></button>
                {comp}
            </div>
        </div>
    );
}

export default Highlights;