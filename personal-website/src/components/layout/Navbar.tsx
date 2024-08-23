import "./Navbar.css";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <nav>
      <div className="navbar">
        <img className="logo-img" src="/images/signature.png" alt="Signature" />
        <div className="links">
          <a href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </a>
          <a href="/cv" className={pathname === "/cv" ? "active" : ""}>
            CV
          </a>
          <a
            href="/projects"
            className={pathname === "/projects" ? "active" : ""}
          >
            Projects
          </a>
          <a
            href="/contact"
            className={pathname === "/contact" ? "active" : ""}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="upperWave">
      <svg id="wave" style={{ transform: "rotate(180deg)", transition: "0.3s", zIndex: 1 }} viewBox="0 0 1440 100" version="1.1" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0"><stop stop-color="#ffffff" offset="0%"></stop><stop stop-color="#ffffff" offset="100%"></stop></linearGradient></defs><path style={{ transform: "translate(0, 0px)", opacity: 1 }} fill="url(#sw-gradient-0)" d="M0,70L48,60C96,50,192,30,288,21.7C384,13,480,17,576,26.7C672,37,768,53,864,65C960,77,1056,83,1152,78.3C1248,73,1344,57,1440,51.7C1536,47,1632,53,1728,55C1824,57,1920,53,2016,53.3C2112,53,2208,57,2304,50C2400,43,2496,27,2592,28.3C2688,30,2784,50,2880,48.3C2976,47,3072,23,3168,11.7C3264,0,3360,0,3456,8.3C3552,17,3648,33,3744,41.7C3840,50,3936,50,4032,50C4128,50,4224,50,4320,45C4416,40,4512,30,4608,35C4704,40,4800,60,4896,68.3C4992,77,5088,73,5184,60C5280,47,5376,23,5472,16.7C5568,10,5664,20,5760,28.3C5856,37,5952,43,6048,48.3C6144,53,6240,57,6336,58.3C6432,60,6528,60,6624,63.3C6720,67,6816,73,6864,76.7L6912,80L6912,100L6864,100C6816,100,6720,100,6624,100C6528,100,6432,100,6336,100C6240,100,6144,100,6048,100C5952,100,5856,100,5760,100C5664,100,5568,100,5472,100C5376,100,5280,100,5184,100C5088,100,4992,100,4896,100C4800,100,4704,100,4608,100C4512,100,4416,100,4320,100C4224,100,4128,100,4032,100C3936,100,3840,100,3744,100C3648,100,3552,100,3456,100C3360,100,3264,100,3168,100C3072,100,2976,100,2880,100C2784,100,2688,100,2592,100C2496,100,2400,100,2304,100C2208,100,2112,100,2016,100C1920,100,1824,100,1728,100C1632,100,1536,100,1440,100C1344,100,1248,100,1152,100C1056,100,960,100,864,100C768,100,672,100,576,100C480,100,384,100,288,100C192,100,96,100,48,100L0,100Z"></path></svg>
      </div>
    </nav>
  );
};

export default Navbar;
