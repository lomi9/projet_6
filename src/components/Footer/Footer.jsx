import logo from '../../assets/logo_kasa_footer.png';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__logo">
                <img src={logo} alt="Logo Kasa" className='footer__logo-img' />
            </div>
            <span className="footer__text">&copy; 2020 Kasa. All rights reserved</span>
        </footer>
    );
}
