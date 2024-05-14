import React from "react"

export default function Meme() {
  return (
    <main className="meme-container">
      <form className="text-form">
        <div className="text-form-container">
          <label htmlFor="toptext">Top text</label>
          <input type="text" name="top-text" value="Shut up" className="form-input" />
        </div>
        <div className="text-form-container">
          <label htmlFor="bottext">Bottom text</label>
          <input type="text" name="bottom-text" value="And take my money" className="form-input" />
        </div>
      </form>
      <button className="fetch-btn">Get a new meme image</button>

    </main>
  )
}
