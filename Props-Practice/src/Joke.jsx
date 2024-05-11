import React from "react"

export default function Joke(props) {
  return (
    <p>
      {props.setup} <br /> {props.punchline}
    </p>
  );
}
