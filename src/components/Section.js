import React from "react";
import "./Section.css";
import RotatingAvatar from "./RotatingAvatar";

const Section = ({ title, isActive }) => {
  const getContent = () => {
    switch (title) {
      case "About Me":
        return (
          <div className="sub-section-content">
            {/* Left Column: Personal Information */}
            <div className="info-column">
              <h3 className="subheader">Information About Me</h3>
              <div className="subcontent">
                <p className="subcontent-item">
                  Ever since I can remember, I've been interested by technology and video games. From tinkering with my first console to learning to code, I’ve always loved the intersection of creativity and logic that tech brings!
                </p>
                <p className="subcontent-item">
                  Now, as a future software developer, I specialize in frontend development and DevOps, combining my passion for design with technical problem-solving. I thrive on creating interactive, engaging user experiences and am always eager to learn and explore new tools and frameworks!
                </p>
              </div>
            </div>
            {/* Middle Column: Links */}
            <div className="section-column">
              <h3 className="subheader">Contact Info</h3>
              <div>
                <p className="subcontent-item">Email: nicole.wijkman@gmail.com</p>
                <p className="subcontent-item">Phone: +46 73 938 50 61</p>
              </div>
              <div className="subcontent">
                <div className="button-column">
                  <a
                    href="https://www.linkedin.com/in/nicole-wijkman-ab3167180/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-button"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/NicoleWij"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="image-button"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      case "Experience":
        return (
          <div className="sub-section-content">
            {/* Left Column: Work Experience */}
            <div className="section-column">
              <h3 className="subheader">Work Experience</h3>
              <div className="subcontent">
                <p className="subcontent-item">
                  <strong>Stockholm University, Stockholm – Exam Invigilator</strong> <br />
                  Jan 2017 - Present <br />
                  Ensures that the examination at Stockholm University is carried out legally and that
                  Stockholm University's examination rules are followed.
                </p>
                <p className="subcontent-item">
                  <strong>Skry, Stockholm – Bachelor’s Thesis Intern</strong> <br />
                  Jan 2023 - Jun 2023 <br />
                  Developed an interactive tool for creating customized CVs as part of my thesis. Focused on
                  frontend development with React, incorporating user experience principles and modern web
                  technologies.
                </p>
                <p className="subcontent-item">
                  <strong>KTH Royal Institute of Technology, Stockholm – Teacher’s Assistant</strong> <br />
                  Jan 2022 - Jun 2023 <br />
                  Acted as a teaching assistant at KTH for 'IX1304 Calculus' in Spring 2022 and 'IV1350
                  Object-Oriented Design' in Spring 2023. Supported students in Object-Oriented Design using
                  Java, emphasizing clear and efficient coding practices.
                </p>
                <p className="subcontent-item">
                  <strong>IT Department at Arbetsförmedlingen, Stockholm – Intern</strong> <br />
                  Feb 2019 - Jun 2019 <br />
                  A four-month long internship via Tekniksprånget at the IT department at Arbetsförmedlingen
                  in Stockholm. The work included a lot of collaboration as well as problem-solving.
                </p>
                <p className="subcontent-item">
                  <strong>Webhallen, Stockholm – Store Associate</strong> <br />
                  May 2023 - Mar 2024 <br />
                  Enhanced service skills and gained experience in understanding customer needs, which is
                  crucial for developing user-friendly applications.
                </p>
              </div>
            </div>

            {/* Right Column: Programs */}
            <div className="section-column">
              <h3 className="subheader">Programs</h3>
              <div className="subcontent">
                <p className="subcontent-item">
                  <strong>Cogig - Female Leader Engineer</strong> <br />
                  Sep 2024 - Present <br />
                  Participated in a selective leadership program via CoGig focusing on professional development.
                </p>
                <p className="subcontent-item">
                  <strong>Netlight Tech Avenue</strong> <br />
                  Nov 2024 - Present<br />
                  Participated in a tech-focused event series at Netlight, contributing to discussions on software innovation
                  and problem-solving.
                </p>
              </div>
            </div>
          </div>
        );
      case "Education":
        return (
          <div className="sub-section-content">
            {/* Left Column: Education */}
            <div className="section-column">
              <h3 className="subheader">Education</h3>
              <div className="subcontent">
                <p className="subcontent-item">
                  <strong>Master’s Programme in Computer Science</strong> <br />
                  KTH Royal Institute of Technology, Stockholm <br />
                  Aug 2023 - Jun 2025 <br />
                  Focused on advanced software development, project management, and leadership skills.
                </p>
                <p className="subcontent-item">
                  <strong>Bachelor’s Programme in Computer Science</strong> <br />
                  KTH Royal Institute of Technology, Stockholm <br />
                  Aug 2020 - Jun 2023 <br />
                  Developed a strong foundation in programming, algorithms, and systems design.
                </p>
                <p className="subcontent-item">
                  <strong>Kungsholmens Gymnasium</strong> <br />
                  Stockholm <br />
                  Aug 2015 - Jun 2018 <br />
                  Graduated from the Natural Science Programme.
                </p>
              </div>
            </div>

            {/* Right Column: Exchange Semesters */}
            <div className="section-column">
              <h3 className="subheader">Exchange Semesters</h3>
              <div className="subcontent">
                <p className="subcontent-item">
                  <strong>Kyushu University</strong> <br />
                  Japan <br />
                  Apr 2024 - Aug 2024 <br />
                  Focused on Computer Science and Cultural Exchange.
                </p>
                <p className="subcontent-item">
                  <strong>Hong Kong University of Science and Technology</strong> <br />
                  Hong Kong <br />
                  Aug 2022 - Dec 2022 <br />
                  Concentrated on Computer Engineering.
                </p>
              </div>
            </div>
          </div>
        );
      case "Skills":
        return (
          <div className="sub-section-content">
            {/* Right Column: Leadership & Project Management */}
            <div className="section-column">
              <h3 className="subheader">Project Management</h3>
              <div className="subcontent">
                <li>
                  <strong>Agile & Scrum Methodologies:</strong> Experienced in leading teams using Agile frameworks to manage projects efficiently.
                </li>
                <li>
                  <strong>Cross-functional Collaboration:</strong> Adept at working with diverse teams across different disciplines to achieve goals.
                </li>
                <li>
                  <strong>Strategic Planning:</strong> Skilled in devising and executing project plans that align with organizational objectives.
                </li>
              </div>
            </div>

            {/* Middle Column: Skills & Areas of Interest */}
            <div className="section-column">
              <h3 className="subheader">Skills & Areas of Interest</h3>
              <div className="subcontent">
                <li>
                  <strong>Frontend Development:</strong> Building responsive, interactive UIs with modern JavaScript frameworks.
                </li>
                <li>
                  <strong>Full-Stack Development:</strong> Integrating frontend and backend technologies for scalable applications.
                </li>
                <li>
                  <strong>Communication:</strong> Conveying technical concepts to varied audiences effectively.
                </li>
                <li>
                  <strong>Innovation:</strong> Exploring new technologies to enhance projects and solve complex problems.
                </li>
              </div>
            </div>

            {/* Left Column: Programming Languages */}
            <div className="section-column">
              <h3 className="subheader">Programming Languages</h3>
              <div className="subcontent">
                <li>Java</li>
                <li>JavaScript</li>
                <li>C/C++</li>
                <li>Python</li>
                <li>Elixir</li>
                <li>Clojure</li>
                <li>HTML/CSS</li>
              </div>
            </div>
          </div>
        );

      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <div className={`section ${isActive ? "active" : ""}`}>
      {/* Show the title only for the active section */}
      {isActive && <div className="section-title">{title}</div>}
      <div
        className="section-content"
        style={{
          opacity: isActive ? 1 : 0,
          visibility: isActive ? "visible" : "hidden",
          transition: "opacity 0.5s ease-in-out, visibility 0.5s ease-in-out",
        }}
      >
        {getContent()}
      </div>
    </div>
  );
};

export default Section;
