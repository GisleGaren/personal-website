import "./Navbar.module.css";
import { useRouter } from "next/router";

const Navbar = () => {
    const router = useRouter();
    const { pathname } = router;

    return (
        <nav className="navbar">
            <img className="logo-img" src="/images/signature.png" alt="Signature"></img>
            <div className="links">
                <a href="/" className={pathname === "/" ? "active" : ""}>Home</a>
                <a href="/cv" className={pathname === "/cv" ? "active" : ""}>CV</a>
                <a href="/projects" className={pathname === "/projects" ? "active" : ""}>Projects</a>
                <a href="/contact" className={pathname === "/contact" ? "active" : ""}>Contact Me</a>
            </div>
        </nav>
    )
}

export default Navbar;