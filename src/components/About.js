import React from "react";

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href="https://github.com/liza">{props.github}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.linkedin}</a>
      
    
    </div>
  );
}

export default About;
