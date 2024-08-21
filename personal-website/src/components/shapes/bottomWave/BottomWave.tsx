import "./BottomWave.css";

export const BottomWave = () => {
  return (
    <div className="bottomWave">
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 250"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,400 L 0,100 C 188.40000000000003,75.33333333333333 376.80000000000007,50.66666666666666 523,59 C 669.1999999999999,67.33333333333334 773.2,108.66666666666669 919,121 C 1064.8,133.33333333333331 1252.4,116.66666666666666 1440,100 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#002776"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <path
          d="M 0,400 L 0,233 C 181.2,208.86666666666667 362.4,184.73333333333332 499,196 C 635.6,207.26666666666668 727.5999999999999,253.93333333333334 877,266 C 1026.4,278.06666666666666 1233.2,255.53333333333333 1440,233 L 1440,400 L 0,400 Z"
          stroke="none"
          stroke-width="0"
          fill="#002776"
          fill-opacity="0.5"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
      </svg>
    </div>
  );
};
