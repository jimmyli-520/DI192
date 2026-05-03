import React from "react";
import data from "./data.json";

class Example3 extends React.Component {
  render() {
    return (
      <div>
        {data.Experiences.map((exp) => (
          <div key={exp.companyName}>
            <img src={exp.logo} alt={exp.companyName} width="100" />
            <a href={exp.url}>{exp.companyName}</a>
            {exp.roles.map((role) => (
              <div key={role.title}>
                <strong>{role.title}</strong>
                <p>{role.startDate}{role.location}</p>
                <p>{role.description}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

export default Example3;