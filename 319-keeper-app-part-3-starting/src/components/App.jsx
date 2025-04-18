import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [items, setItems] = React.useState([]);

  function addNote(newNote) {
    setItems((prevItems) => {
      return [...prevItems, newNote];
    });
  }

  function deleteNote(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {items.map((eachNote, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={eachNote.title}
            content={eachNote.content}
            onDelete={deleteNote}
          />
        );
      })}

      <Footer />
    </div>
  );
}

export default App;
