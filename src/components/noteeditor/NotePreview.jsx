"use client"

import { useContext } from "react"
import { NoteContext } from "../provider/NoteProvider"

useContext

export const NotePreview = () => {
 const { data } = useContext(NoteContext)
  return (
    <div>{data}</div>
  )
}
