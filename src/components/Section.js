import React from 'react';

const Section = ({ title, isActive }) => {
  const getContent = () => {
    switch (title) {
      case 'About Me':
        return (
          <div>
            <h3>About Me</h3>
            <p>
              Hi! I'm a passionate software developer with experience in frontend development,
              DevOps, and leadership programs. Use the arrow keys to navigate through the sections of
              my resume!
            </p>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <h3>Cogig – Female Leader Engineer</h3>
            <p>2024-09-01 to Present</p>
            <p>
              Participated in a selective leadership program focusing on professional development,
              networking, and leadership skills.
            </p>
            <h3>Netlight Tech Avenue</h3>
            <p>2024</p>
            <p>
              Engaged in a tech-focused event series, contributing to discussions on software
              innovation and problem-solving.
            </p>
          </div>
        );
      case 'Education':
        return (
          <div>
            <h3>Master’s Programme in Computer Science</h3>
            <p>KTH Royal Institute of Technology (2023 - 2025)</p>
            <h3>Bachelor’s Programme in Computer Science</h3>
            <p>KTH Royal Institute of Technology (2020 - 2023)</p>
            <h3>Exchange Semesters</h3>
            <p>Kyushu University, Japan (2024)</p>
            <p>Hong Kong University of Science and Technology (2022)</p>
          </div>
        );
      case 'Skills':
        return (
          <div>
            <h3>Technical Skills</h3>
            <p>Java, JavaScript, Python, HTML/CSS, Elixir</p>
            <h3>Frameworks and Tools</h3>
            <p>React, Terraform, AWS, Spinnaker</p>
            <h3>Leadership & Collaboration</h3>
            <p>Agile, cross-functional teamwork, strategic planning</p>
          </div>
        );
      default:
        return <p>No content available.</p>;
    }
  };

  return (
    <section
      className={`section ${isActive ? 'active' : ''}`}
      style={{
        opacity: isActive ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
      }}
    >
      <h2>{title}</h2>
      {getContent()}
    </section>
  );
};

export default Section;
