import React from "react";
import data from "./data.json";

class Example2 extends React.Component {
  render() {
    return (
      <div>
        {data.Skills.map((skill) => (
          <div key={skill.Area}>
            <strong>{skill.Area}</strong>
            <ul>
              {skill.SkillSet.map((item) => (
                <li key={item.Name}>{item.Name}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    );
  }
}

export default Example2;