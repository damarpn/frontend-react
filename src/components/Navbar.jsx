import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand bg-dark">
                <div className="container">
                    <ul className="nav">
                        <img src={ logo } alt="" style={{ height: "40px" }} />
                        <li>
                            <Link to="/" className="nav-link"> Beranda </Link>
                        </li>
                        <li>
                            <Link to="/manajemen-buku" className="nav-link"> Manajemen Buku </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;