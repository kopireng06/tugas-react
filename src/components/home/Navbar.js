import {Link} from 'react-router-dom';
import LogoAlterra from './logo-ALTA@2x.png';

const Navbar = () => {
    return ( 
        <div className="container-fluid p-0">
            <nav className="navbar shadow-custom fixed-top navbar-expand-lg navbar-light bg-white p-2">
            <div className="container-lg">
                <img src={LogoAlterra} style={{height:'40px'}} alt=""/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item px-1">
                    <Link className="nav-link nav-link-active alterra-color-orange" to="/">HOME</Link>
                    </li>
                    <li className="nav-item px-1">
                    <Link className="nav-link alterra-color-blue" to="#">ABOUT</Link>
                    </li>
                    <li className="nav-item px-1">
                    <Link className="nav-link alterra-color-blue" to="/news">NEWS</Link>
                    </li>
                    <li className="nav-item px-1" id="contact">
                    <Link to="/contact" className="nav-link alterra-color-blue">CONTACT</Link>
                    </li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;