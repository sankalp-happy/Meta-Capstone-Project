import photo from '../Assets/restauranfood.jpg';
const Main = () => {
    return (
        <main>
            <div className="content">
                <h1 className='name'>Little Lemon</h1>
                <h2>Chicago</h2>
                <p className="info">We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>

                <button id="reserve"><a href="#reservations">Reserve a table</a></button>
            </div>
            <img className = "food" src= {photo} alt="" />
        </main>
    )
}

export default Main;