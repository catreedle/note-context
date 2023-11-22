"use client"

import { useContext, useEffect } from "react";
import { NoteContext } from "./provider/NoteProvider";

export const NoteCard = () => {


    const { notes } = useContext(NoteContext)
    console.log('meow', notes)

    useEffect(() => {
        console.log('added', notes)

    }, [notes])
    return (
        <div>
            <div>
                {
                    notes.map(({body}, index) => (
                        <textarea rows="8" cols="30" className=" bg-red-300 resize-none border-2 ro">{body}</textarea>
                    ))
                }
            </div>

        </div>
    )
}