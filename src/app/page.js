import { NoteCard } from "@/components/NoteCard";
import { NoteHeader } from "@/components/NoteHeader";
import { NoteInput } from "@/components/noteeditor/NoteInput";
import { NotePreview } from "@/components/noteeditor/NotePreview";


export default function Home() {
  return (
    <div className=" mx-auto my-0 w-2/3">
      <NoteHeader className="" />
      <NoteCard className=" flex justify-around gap-x-20"/>
      {/* <NoteInput className=" bg-red-400"/> */}
      {/* <NotePreview /> */}
    </div>
  )
}
