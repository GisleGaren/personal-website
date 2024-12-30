import "./index.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect, useRef } from "react";
import { LowerWave } from "@/components/shapes/lowerWave/LowerWave";
import { Button } from "@/components/functionality/button/Button";
import { Tag } from "@/components/other/tags/tag";
import { PathShape } from "@/components/shapes/path/pathShape";
import { SneakPeek } from "@/components/other/sneakPeek/SneakPeek";
import { Popover } from "react-tiny-popover";
import { PopoverContent } from "@/components/other/popover/PopoverContent";

const Home = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  const [isPopoverOpen, setIsPopoverOpen] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  // State to control the visibility of each SneakPeek
  const [visible, setVisible] = useState({
    first: false,
    second: false,
    third: false,
    fourth: false,
    fifth: false,
    sixth: false,
  });

  // Refs for each SneakPeek container
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const fourthRef = useRef(null);
  const fifthRef = useRef(null);
  const sixthRef = useRef(null);
  // Repeat for each SneakPeek

  type PopoverId = "first" | "second" | "third" | "fourth" | "fifth" | "sixth";

  const handleExpand = (id: PopoverId) => {
    setExpanded((prev) => (prev === id ? null : id));
    setIsPopoverOpen((prev) => {
      const newState = {
        first: false,
        second: false,
        third: false,
        fourth: false,
        fifth: false,
        sixth: false,
      };
  
      // If the clicked popover is already open, close it
      if (prev[id]) {
        return newState; // Close all popovers
      }
  
      // Otherwise, open the clicked popover
      return {
        ...newState,
        [id]: true,
      };
    });
  };

  useEffect(() => {
    let delay = 0; // Starting delay in milliseconds
    const delayIncrement = 500; // Incremental delay for each subsequent image

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const id = target.dataset.id;
          if (entry.isIntersecting && id) {
            setTimeout(() => {
              setVisible((prev) => ({ ...prev, [id]: true }));
            }, delay);
            delay += delayIncrement; // Increase delay for the next image
            observer.unobserve(entry.target); // Stop observing the current target
          }
        });
      },
      {
        rootMargin: "0px",
        threshold: 0.1, // Adjust based on when you want the component to become visible
      }
    );

    const elements = [
      firstRef,
      secondRef,
      thirdRef,
      fourthRef,
      fifthRef,
      sixthRef,
    ];
    elements.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      // Cleanup the observer on component unmount
      observer.disconnect();
    };
  }, []);

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
        <Popover
          ref={firstRef}
          isOpen={isPopoverOpen.first}
          positions={["right"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/chad.jpeg"
              headerText="OSI Gruppedans"
              pText="Next to my studies, I volunteered as a treasurer for OSI Gruppedans for two years. 
              I was responsible for the financial management of the group. 
              
              Most of my dancing was in HipHop and every semester ended with a show, where we showcased our choreographies. "
            />
          }
        >
          <div
            data-id="first"
            className={`firstImg ${visible.first ? "visible" : ""} ${
              expanded === "first" ? "expanded" : ""
            }`}
            onClick={() => {
              handleExpand("first");
            }}
          >
            {visible.first && <SneakPeek imgUrl="/images/chad.jpeg" />}
          </div>
        </Popover>
        <Popover
          ref={secondRef}
          isOpen={isPopoverOpen.second}
          positions={["top"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/bachelorCelebration.jpg"
              headerText="Bachelor Thesis Celebration"
              pText="Completed my B.Eng in Computer Science at the Oslo Metropolitan University in the spring of 2024
              My bachelor thesis was about the development of a web application for a case managers at the Norwegian Labour and Welfare Administration
              to effectivize their workflow. Final grade: A"
            />
          }
        >
          <div
            data-id="second"
            className={`secondImg ${visible.second ? "visible" : ""} ${
              expanded === "second" ? "expanded" : ""
            }`}
            onClick={() => {
              handleExpand("second");
            }}
          >
            {visible.second && (
              <SneakPeek imgUrl="/images/bachelorCelebration.jpg" />
            )}
          </div>
        </Popover>
        <Popover
          ref={thirdRef}
          isOpen={isPopoverOpen.third}
          positions={["right"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/dagestadGroupPhoto.jpg"
              headerText="My days as a Shoe Salesman"
              pText="Next to my studies, I worked as a shoe salesman part time at Skomaker Dagestad for a little over 5 years. Our products
              were specialized classic footwear made using a goodyearwelted construction where we took in reparations. "
            />
          }
        >
        <div
          data-id="third"
          className={`thirdImg ${visible.third ? "visible" : ""} ${
            expanded === "third" ? "expanded" : ""
          }`}
          onClick={() => handleExpand("third")}
        >
          {visible.third && (
            <SneakPeek imgUrl="/images/dagestadGroupPhoto.jpg" />
          )}
        </div>
        </Popover>
        <Popover
          ref={fourthRef}
          isOpen={isPopoverOpen.fourth}
          positions={["left"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/summerInternship.jpg"
              headerText="My internship as a Fullstack Developer"
              pText="In the summer of 2024, I had my first technical internship as a software intern at Sparebank1 and 
              worked on project where we created a wrapped application for a customer's consumption patterns. Most of the project
              was done in React and Node.js."
            />
          }
        >
        <div
          data-id="fourth"
          className={`fourthImg ${visible.fourth ? "visible" : ""} ${
            expanded === "fourth" ? "expanded" : ""
          }`}
          onClick={() => handleExpand("fourth")}
        >
          {visible.fourth && (
            <SneakPeek imgUrl="/images/summerInternship.jpg" />
          )}
        </div>
        </Popover>
        <Popover
          ref={fifthRef}
          isOpen={isPopoverOpen.fifth}
          positions={["left"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/roskilde.jpg"
              headerText="Me at Roskilde Festival"
              pText="I also enjoy music festivals"
            />
          }
        >
        <div
          data-id="fifth"
          className={`fifthImg ${visible.fifth ? "visible" : ""} ${
            expanded === "fifth" ? "expanded" : ""
          }`}
          onClick={() => handleExpand("fifth")}
        >
          {visible.fifth && <SneakPeek imgUrl="/images/roskilde.jpg" />}
        </div>
        </Popover>
        <Popover
          ref={sixthRef}
          isOpen={isPopoverOpen.sixth}
          positions={["left"]}
          padding={10}
          content={
            <PopoverContent
              imgUrl="/images/analogPhotography.jpg"
              headerText="I also enjoy analog photography"
              pText="I have recently bought a Canon A-1 analog camera and am currently experimenting with various films and lenses."
            />
          }
        >
        <div
          ref={sixthRef}
          data-id="sixth"
          className={`sixthImg ${visible.sixth ? "visible" : ""} ${
            expanded === "sixth" ? "expanded" : ""
          }`}
          onClick={() => handleExpand("sixth")}
        >
          {visible.sixth && (
            <SneakPeek imgUrl="/images/analogPhotography.jpg" />
          )}
        </div>
        </Popover>
      </div>
    </div>
  );
};

export default Home;
