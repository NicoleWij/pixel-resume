import React from 'react';

const Section = ({ title, isActive }) => {
  const getContent = () => {
    switch (title) {
      case 'Education':
        return (
          <div>
            <h3>Master’s Programme in Computer Science</h3>
            <p>KTH Royal Institute of Technology (2023 - 2025)</p>
            <h3>Bachelor’s Programme in Computer Science</h3>
            <p>KTH Royal Institute of Technology (2020 - 2023)</p>
            <h3>Exchange Semester</h3>
            <p>Kyushu University, Japan (2024)</p>
          </div>
        );
      case 'Experience':
        return (
          <div>
            <h3>Cogig – Female Leader Engineer</h3>
            <p>2024-09-01 to Present</p>
            <p>
              Participated in a selective leadership program focusing on
              professional development, networking, and leadership skills.
            </p>
          </div>
        );
      case 'Skills':
        return (
          <div>
            <h3>Programming Languages</h3>
            <p>Java, JavaScript, Python, HTML/CSS, Elixir</p>
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
