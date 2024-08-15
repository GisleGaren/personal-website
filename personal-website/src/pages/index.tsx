import "./index.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";
import { Button } from "@/components/functionality/button/Button";
import { Tag } from "@/components/other/tags/tag";

const Home = () => {
  return (
    <div className="content">
      <LowerWave></LowerWave>
      <div className="content-display">
        <div className="left-column">
          <h2>STUDENT, DEVELOPER AND ASPIRING DATA ANALYST </h2>
          <h1>Greetings, my name is Gisle Garen!</h1>
          <p>
            I am currently working on my M.Sc in Artificial Intelligence at
            Denmark's Technical University and have industry experience working
            as a fullstack developer working with web applications. I am
            currently interested in pursuing an internship in data engineering
            and / or analysis!
          </p>
          <Button imageUrl="/images/Mail.png" content="Contact Me"/>
        </div>
        <div className="right-column">
          <img src="/images/profilePimp.png" />
          <div className="topLeftThingy">
            <Tag tagContent="Year Student" tagIconUrl="/images/education.png" tagNumber="4th"/>
          </div>
          <div className="midRightThingy">
            <Tag tagIconUrl="/images/work.png" tagNumber="2" tagContent="Internships"/>
          </div>
          <div className="bottomLeftThingy">
            <Tag tagIconUrl="/images/location.png" tagNumber="" tagContent="Copenhagen"/>
          </div>
        </div>
      </div>
      <div className="about">
        <h1>About Myself</h1>
      </div>
      <div className="about-content">
        <div className="left-about">
          <h2>General Information</h2>
          <ul className="faqList">
            <li>
              <span>B.Sc in Computer Science @ OsloMet</span>
            </li>
            <li>
              <span>M.Sc in Artificial Intelligence @ DTU</span>
            </li>
            <li>
              <span>Treasurer at OSI Gruppedans</span>
            </li>
            <li>
              <span>
                Technical Experience in fullstack development at NAV and
                Sparebank1
              </span>
            </li>
          </ul>
        </div>
        <div className="right-about">
          <Carousel
            width={500}
            autoPlay
            interval={8000}
            infiniteLoop
            showThumbs={false}
            showStatus
          >
            <div>
              <img src="/images/profile.png" />
              <p>Heihei</p>
            </div>
            <div>
              <img src="/images/profilePimp.png" alt="" />
              <p>yoyo</p>
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Home;
