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

        console.log(newNotes)
        setNotes(newNotes);
        console.log('neww', notes)
    }

    return <NoteContext.Provider value={{ data, notes, handleSetData, handleAddNote }}>{children}</NoteContext.Provider>

}