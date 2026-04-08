import "./cvContent.css";

type cvContentProps = {
  cvDate: string;
  title: string;
  company: string;
  location: string;
  description: string;
};

export const CVContent = ({cvDate, title, company, location, description}: cvContentProps) => {
    return(
        <div className="cv-content">
                <div className="cv-section">
                    <h3 className="cv-date">{cvDate}</h3>
                    <div className="cv-line">
                        <div className="cv-dot"></div>
                    </div>
                    <div className="cv-description">
                        <h2>{title}</h2>
                        <p className="company">{company}</p>
                        <p className="description-location">{location}</p>
                        <p>{description} </p>
                    </div>
                </div>
            </div>
    )
}