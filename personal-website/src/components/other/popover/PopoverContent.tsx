import "./PopoverContent.css";

type PopoverContentProps = {
    imgUrl: string;
    headerText: string;
    pText: string;
}

export const PopoverContent = ({ imgUrl, headerText, pText}: PopoverContentProps) => {
  return (
    <div className="popover">
      <div className="text">
        <h1>{headerText}</h1>
        <p>
          {pText}
          </p>
      </div>
      <img src={imgUrl} />
    </div>
  );
};
