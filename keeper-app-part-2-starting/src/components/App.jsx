import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes.js";

const dummy = {
  key: 4,
  title: "Hardware vs. Software",
  content:
    "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software.",
};

function App() {
  return (
    <div>
      <Header />
      {notes.map((noteInfo) => (
        <Note title={noteInfo.title} content={noteInfo.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
