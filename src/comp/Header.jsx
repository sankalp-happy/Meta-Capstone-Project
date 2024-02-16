import Nav from "./Nav";
import Logo from '../Assets/Logo.svg';

const Header = () => {
    return (
        <header className="container">
            <img src={Logo} alt="Logo" id="logo"/>
            <Nav />
        </header>
    );
}

export default Header;