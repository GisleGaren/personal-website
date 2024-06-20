import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <img className="logo-img" src="/images/signature.png" alt="Signature"></img>
            <div className="links">
                <a href="/">Home</a>
                <a href="/cv">CV</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact Me</a>
            </div>
        </nav>
    )
}

export default Navbar;