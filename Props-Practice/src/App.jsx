import React from "react";
import Joke from "./Joke";
import Jokes from "./jokesData";

export default function App() {
  const jokeElements = Jokes.map((joke) => {
    return <Joke setup={joke.setup} punchline={joke.punchline} />;
  });
  return <div>{jokeElements}</div>;
}
