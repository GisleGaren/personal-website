import "./PopoverContent.css";
import { useState } from "react";
type PopoverContentProps = {
  imgUrl: string;
  headerText: string;
  pText: string;
};

export const PopoverContent = ({
  imgUrl,
  headerText,
  pText,
}: PopoverContentProps) => {

  const [isTextVisible, setTextVisible] = useState(true);

  const handleClick = () => {
    setTextVisible(!isTextVisible);
  };

  return (
    <div className="popover" onClick={handleClick}>
      <div className={`text-popover ${isTextVisible ? '' : 'hidden'}`}>
        <h1>{headerText}</h1>
        <p>{pText}</p>
      </div>
      <img src={imgUrl} alt="Picture of Gisle doing something" className={isTextVisible ? '' : 'no-filter'} />
    </div>
  );
};
