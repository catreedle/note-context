"use client"

import { useContext } from "react";
import { NoteContext } from "../provider/NoteProvider";

export const NoteInput = () => {

    const { handleSetData } = useContext(NoteContext)
    return (
        <div>
            <input onChange={(e) => handleSetData(e.target.value)} />
        </div>
    )
}
