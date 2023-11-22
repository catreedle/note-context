"use client"

import { useContext } from "react";
import { Heart, Plus } from "lucide-react"
import { NoteContext } from "./provider/NoteProvider";

export const NoteHeader = () => {

    const  { handleAddNote } = useContext(NoteContext);
    return (
        <div className=" flex justify-between mt-8 mx-8">
            <h1 className=" flex gap-2 text-xl"><b>Noted</b><span><Heart /></span></h1>
            <button onClick={handleAddNote}><Plus/></button>
        </div>
    )
}