import React from "react";
import "../../public/styles.css";

let noteTitle = "Title of the Note";
let noteParagraph = "This is where the content of the note is";

function Note(){
    return (
        <div className="note">
            <h1>{noteTitle}</h1>
            <p>{noteParagraph}</p>
        </div>
    );
}

export default Note;