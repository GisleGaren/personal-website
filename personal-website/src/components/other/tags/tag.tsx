import "./tag.css";

type tagProps = {
  tagIconUrl: string;
  tagNumber: string;
  tagContent: string;
};

export const Tag = ({ tagContent, tagIconUrl, tagNumber }: tagProps) => {
  return (
    <div className="contentTag">
      <img src={tagIconUrl} alt="icon of tag"></img>
      <h2>{tagNumber}</h2>
      <div className="text">{tagContent}</div>
    </div>
  );
};
