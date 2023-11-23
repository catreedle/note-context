"use client"

import { createContext, useState } from "react";

export const NoteContext = createContext();

export const NoteProvider = ({ children }) => {
    const [data, setData] = useState("");
    const [notes, setNotes] = useState([]);

    function handleSetData(value) {
        setData(value)
    }

    function handleAddNote() {
        const newNotes = [...notes];
        const note = { body: "" };
        newNotes.push(note);

        setNotes(newNotes);
    }

    function handleDeleteNote(index) {
        const newNotes = [...notes];

        newNotes.splice(index, 1);
        setNotes(newNotes);

    }

    function changeContent(index, newContent) {
        const newNotes = [...notes];
        const newNote = {
            body: newContent,
        }

        newNotes.splice(index, 1, newNote);
        setNotes(newNotes);
    }
    return <NoteContext.Provider value={{ data, notes, handleSetData, handleAddNote, handleDeleteNote, changeContent }}>{children}</NoteContext.Provider>

}