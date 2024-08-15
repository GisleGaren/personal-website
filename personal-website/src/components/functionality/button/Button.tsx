import "./Button.css"

type ButtonProps = {
    imageUrl: string;
    content: string;
}

export const Button = ({ imageUrl, content}: ButtonProps) => {
  return (
    <div className="buttonContainer">
      <button className="contactButton">
        {content}
        <img
          src={imageUrl}
          className="contactButtonImage"
          alt="Icon of button"
        />
      </button>
    </div>
  );
};
