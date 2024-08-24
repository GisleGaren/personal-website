import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";
import { Button } from "@/components/functionality/button/Button";
import { Tag } from "@/components/other/tags/tag";
import { PathShape } from "@/components/shapes/path/pathShape";
import { SneakPeek } from "@/components/other/sneakPeek/SneakPeek";

const Home = () => {
  return (
    <div className="content">
      <LowerWave></LowerWave>
      <div className="content-display">
        <div className="left-column">
          <h2>STUDENT, DEVELOPER AND ASPIRING DATA ANALYST </h2>
          <div className="rotating-text">
            <h1>
              <span className="word alizarin">Greetings,</span> <br />
              <span className="word wisteria">God dag,</span> <br />
              <span className="word peter-river">Bonjour,</span> <br />
              <span className="word sun-flower">Guten tag,</span> <br />
              <span className="word alizarin">Greetings,</span> <br />
            </h1>
          </div>
          <h1 className="restofHeader">my name is Gisle Garen!</h1>
          <p>
            I am currently working on my M.Sc in Artificial Intelligence at
            Denmark's Technical University and have industry experience working
            as a fullstack developer working with web applications. I am
            currently interested in pursuing an internship in data engineering
            and / or analytics!
          </p>
          <Button imageUrl="/images/Mail.png" content="Contact Me" />
        </div>
        <div className="right-column">
          <img src="/images/profilePimp.png" />
          <div className="topLeftThingy">
            <Tag
              tagContent="Year Student"
              tagIconUrl="/images/education.png"
              tagNumber="4th"
            />
          </div>
          <div className="midRightThingy">
            <Tag
              tagIconUrl="/images/work.png"
              tagNumber="2"
              tagContent="Internships"
            />
          </div>
          <div className="bottomLeftThingy">
            <Tag
              tagIconUrl="/images/location.png"
              tagNumber=""
              tagContent="Copenhagen"
            />
          </div>
        </div>
      </div>
      <div className="about">
        <img height={50} width={50} src="/images/star.png" />
        <h1>About Me</h1>
      </div>
      <div className="about-content">
        <PathShape />
        <div className="firstImg">
          <SneakPeek imgUrl="/images/chad.jpeg" />
        </div>
        <div className="secondImg">
          <SneakPeek imgUrl="/images/bachelorCelebration.jpg" />
        </div>
        <div className="thirdImg">
          <SneakPeek imgUrl="/images/dagestadGroupPhoto.jpg" />
        </div>
        <div className="fourthImg">
          <SneakPeek imgUrl="/images/summerInternship.jpg" />
        </div>
        <div className="fifthImg">
          <SneakPeek imgUrl="/images/roskilde.jpg" />
        </div>
        <div className="sixthImg">
          <SneakPeek imgUrl="/images/analogPhotography.jpg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
