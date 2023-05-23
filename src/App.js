import React from "react";
import NotesList from "./components/NotesList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/Search";
import Header from "./components/Header";

// To Get the data from Local Storage
const getLocalNotes = () => {
  let savedNotes = localStorage.getItem("notesData");
  console.log(savedNotes);

  if (savedNotes) {
    return JSON.parse(localStorage.getItem("notesData"));
  } else {
    return [];
  }
};

const App = () => {
  const [notes, setNotes] = useState(getLocalNotes());

  const [darkMode, setDarkMode] = useState(false);
  const [searchText, setSearchText] = useState("");

  // https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/   (Not Working)
  // useEffect(() => {
  //   const notes = JSON.parse(
  //     localStorage.getItem('notesData')
  //   );

  //   if (notes) {
  //     setNotes(notes);
  //   }
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem(
  //     'notesData',
  //     JSON.stringify(notes)
  //   );
  // }, [notes]);

  // To Set the data from Local Storage
  useEffect(() => {
    localStorage.setItem("notesData", JSON.stringify(notes));
  }, [notes]);

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };

  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(searchText)
          )}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
        />
      </div>
    </div>
  );
};

export default App;
