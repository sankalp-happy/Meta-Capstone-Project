import { Link } from 'react-router-dom';
import photo from '../Assets/restauranfood.jpg';
const Main = () => {
    return (
        <main>
            <div className="content">
                <h1 className='name'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="info">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                <Link to={"/booking"}><button id="reserve">Reserve a table</button></Link>
            </div>
            <img className = "food" src= {photo} alt="" />
        </main>
    )
}

export default Main;