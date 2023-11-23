import { NoteCard } from "@/components/noteeditor/NoteCard";
import { NoteHeader } from "@/components/noteeditor/NoteHeader";
import { NoteInput } from "@/components/noteeditor/NoteInput";
import { NotePreview } from "@/components/noteeditor/NotePreview";


export default function Home() {
  return (
    <>
      <NoteHeader className="" />
      {/* <NoteCard className=" flex justify-around gap-x-20"/> */}
      {/* <NoteInput className=" bg-red-400"/> */}
      <NotePreview />
    </>
  )
}
