import logo from '../../assets/logo_kasa.png';
import { Link } from "react-router-dom";

export default function Header() {
    return (
      <>
        <header className="header">
          <Link to={'/'} className='header__logo'><img src={logo} alt="Logo Kasa" className='header__logo-img' /></Link>
          <nav className='header__navbar'>
            <Link to={`/`} className='header__navbar-link header__navbar-link--accueil'>Accueil</Link>
            <Link to={`/about`} className='header__navbar-link header__navbar-link--a-propos'>A Propos</Link>
          </nav>
        </header>
      </>
    );
  }