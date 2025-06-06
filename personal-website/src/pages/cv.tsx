import "./cv.css"
import { CVContent } from "@/components/other/cvContent/cvContent"

const CV = () => {
    return (
        <div className="wrapper">
            <h1>Curriculum Vitae</h1>
            <p className="cv-desc">At the present date, I am currently enrolled in a M.Sc program in Artificial Intelligence at the Technical University of Denmark, 
                where I have gone through the first year year. This builds upon my foundation in Computer Science basics, where I  </p>
            <div className="headline-section">Work Life</div>
            <div className="cv-content">
                <CVContent
                    cvDate="Jun. 2024 - Aug. 2024"
                    title="Summer Intern"
                    company="Sparebank1 Utvikling"
                    location="Oslo, Norway"
                    description="Fullstack Developer working on a rewind application for a customer's personal finances."
                />
                <CVContent
                    cvDate="Jan. 2023 - Jun. 2024"
                    title="Bachelor Thesis"
                    company="NAV"
                    location="Oslo, Norway"
                    description="Bachelor thesis in collaboration with NAV IT. A document retrieval webapplication for case managers with project title Vju."
                />
                <CVContent
                    cvDate="Des. 2018 - Jun. 2024"
                    title="Sales"
                    company="Skomaker Dagestad"
                    location="Oslo, Norway"
                    description="Fitting, sale and handling reparations of diverse lasted footwear."
                />
                <CVContent
                    cvDate="Jan. 2018 - Apr. 2018"
                    title="Trainee"
                    company="Marine Harvest"
                    location="Volda, Norway"
                    description="Fulfilling daily routines at the fishery. Packing out vaccines, filtering / disposing of contaminated salmon and general maintenance of the facilities."
                />
                <CVContent
                    cvDate="Jun. 2017 - Aug. 2017"
                    title="English Teacher"
                    company="Reading Town"
                    location="Shanghai, China"
                    description="Teaching, providing feedback on report cards and grading."
                />
            </div>
            <div className="headline-section">Education</div>
            <div className="cv-content">
                <CVContent
                    cvDate="Aug. 2024 - Jun. 2025"
                    title="DTU - Technical University of Denmark"
                    company="1st Year of Master's Degree, Artificial Intelligence"
                    location="Kongens Lyngby, Denmark"
                    description="Halfway done with the master's programme before switching to NTNU Trondheim."
                />
                <CVContent
                    cvDate="Aug. 2021 - Jun. 2024"
                    title="Oslo Metropolitan University"
                    company="Bachelor of Engineering, Computer Science"
                    location="Oslo, Norway"
                    description="Student society: OSI Gruppedans - Treasurer 2022 - 2023"
                />
                <CVContent
                    cvDate="Aug. 2018 - Jun. 2019"
                    title="University of Oslo"
                    company="Year Study - Economics"
                    location="Oslo, Norway"
                    description="Completed one year of economics before switching to computer science."
                />
            </div>
        </div>
    )
}

export default CV