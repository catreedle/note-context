"use client"

import { useContext } from "react";
import { NoteContext } from "./provider/NoteProvider";

import { Trash } from "lucide-react";

export const NoteCard = () => {


    const { notes, handleDeleteNote, changeContent } = useContext(NoteContext)


    return (
        <div className=" grid grid-cols-3 gap-4 my-8">
            {
                notes.map(({ body }, index) => (
                    <div className=" relative" key={index}>
                        <textarea rows="8" cols="30" className=" bg-red-300 resize-none border-2 p-2 rounded-xl" value={body}
                        onChange={(e) => changeContent(index, e.target.value)}>
                        </textarea>
                        <button className=" absolute top-2 right-5 hover:text-red-600" onClick={() => handleDeleteNote(index)}><Trash /></button>
                    </div>

                ))
            }

        </div>
    )
}