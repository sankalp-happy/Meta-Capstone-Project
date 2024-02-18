import Nav from "./Nav";
import Logo from '../Assets/Logo.svg';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="container">
            <Link to={"/"}><img src={Logo} alt="Logo" id="logo"/></Link>
            <Nav />
        </header>
    );
}

export default Header;