import { NoteCard } from "@/components/NoteCard";
import { NoteHeader } from "@/components/NoteHeader";
import { NoteInput } from "@/components/noteeditor/NoteInput";
import { NotePreview } from "@/components/noteeditor/NotePreview";


export default function Home() {
  return (
    <div className=" mx-20">
      <NoteHeader className=" flex justify-center" />
      <NoteCard className=" grid grid-cols-2 w-1/3"/>
      {/* <p>Hey</p> */}
      {/* <NoteInput className=" bg-red-400"/> */}
      {/* <NotePreview /> */}
    </div>
  )
}
