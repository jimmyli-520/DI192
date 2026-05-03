import React from "react";
import data from "./data.json";

class Example1 extends React.Component {
  render() {
    return (
      <ul>
        {data.SocialMedias.map((url) => (
          <li key={url}>{url}</li>
        ))}
      </ul>
    );
  }
}

export default Example1;