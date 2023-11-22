"use client"

import { useContext } from "react";
import { Pencil, Plus } from "lucide-react"
import { NoteContext } from "./provider/NoteProvider";

export const NoteHeader = () => {

    const  { handleAddNote } = useContext(NoteContext);
    return (
        <div className=" flex justify-between w-1/3">
            <h1 className=" flex gap-2">Noted<span><Pencil /></span></h1>
            <button onClick={handleAddNote}><Plus/></button>
        </div>
    )
}