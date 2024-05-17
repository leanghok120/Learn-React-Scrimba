import React from "react";
import memesData from "./memesData";

export default function Meme() {
  function fetchImage() {
    const memesList = memesData.data.memes;
    const randomMeme = memesList[Math.floor(Math.random() * memesList.length)];

    console.log(randomMeme.url);
  }
  return (
    <main className="meme-container">
      <div className="text-form">
        <div className="text-form-container">
          <label htmlFor="toptext">Top text</label>
          <input
            type="text"
            name="top-text"
            placeholder="Shut up"
            className="form-input"
          />
        </div>
        <div className="text-form-container">
          <label htmlFor="bottext">Bottom text</label>
          <input
            type="text"
            name="bottom-text"
            placeholder="And take my money"
            className="form-input"
          />
        </div>
      </div>
      <button onClick={fetchImage} className="fetch-btn">
        Get a new meme image
      </button>
    </main>
  );
}
