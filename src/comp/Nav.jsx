import { Link } from 'react-router-dom';
const Nav = () => {
    return (
        <nav className="nav">
            <ul>
                <Link to={"/"}><li className="list">Home</li></Link>
                <Link to={"#about"}><li className="list">About</li></Link>
                <Link to={"#menu"}><li className="list">Menu</li></Link>
                <Link to={"/booking"}><li className="list">Reservations</li></Link>
                <Link to={"#menu"}><li className="list">Order Online</li></Link>
                <Link><li className="list">Login</li></Link>
            </ul>
        </nav>
    )
}

export default Nav;