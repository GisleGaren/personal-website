import "./Footer.module.css";

const Footer = () => {
    return (
        <footer className="feet">
            <div>
                <a href="https://www.linkedin.com/in/gisle-garen-b18308149/">
                    <img height={35} width={35} src="../../../images/linkedin.png" alt="Linkedin Icon" />
                </a>
                <a href="https://www.instagram.com/gislegaren/">
                    <img height={35} width={35} src="../../../images/instagram.png" alt="Instagram Icon" />
                </a>
                <a href="https://www.facebook.com/gisle.garen">
                    <img height={35} width={35} src="../../../images/facebook.png" alt="Facebook Icon" />
                </a>
            </div>
            <p>© 2024 Gisle Garen's personal website</p>
        </footer>
    );
}

export default Footer;