"use client"

import { useContext } from "react";
import { NoteContext } from "../provider/NoteProvider";

import { Palette, Trash } from "lucide-react";

export const NoteCard = ({ content, index }) => {


    const { handleDeleteNote, changeContent } = useContext(NoteContext);

    return (
        <div className=" bg-red-300 h-fit rounded-lg">
            <textarea className=" w-full h-[220px] bg-transparent focus: outline-none resize-none m-4" onChange={(e) => changeContent(index, e.target.value)} value={content}>

            </textarea>
            <div className=" m-2 space-x-2 flex">
                <button className=" hover:text-red-600" onClick={() => handleDeleteNote(index)}><Trash /></button>
                <input type="color" id="pickColor" className=" hidden p-4" />
                <label for="pickColor">
                    <Palette />
                </label>
            </div>

        </div>
        // <div className=" grid grid-cols-3 gap-4 my-8">
        //     {
        //         notes.map(({ body }, index) => (
        //             <div className=" bg-red-300 relative" key={index}>
        //                 <textarea rows="8" cols="30" className=" bg-transparent focus:outline-none resize-none border-2 p-2 rounded-xl" value={body}
        //                 onChange={(e) => changeContent(index, e.target.value)}>
        //                 </textarea>
        //                 <button className=" absolute top-2 right-5 hover:text-red-600" onClick={() => handleDeleteNote(index)}><Trash /></button>
        //             </div>

        //         ))
        //     }

        // </div>
    )
}