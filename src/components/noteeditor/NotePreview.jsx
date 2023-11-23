"use client"

import React, { useContext } from 'react'
import { NoteCard } from './NoteCard'
import { NoteContext } from '../provider/NoteProvider'


export const NotePreview = () => {

  const { notes } = useContext(NoteContext);
  
  return (
    <div className=" grid grid-cols-2 gap-6">
      {
        notes.map(({ body }, index) => <NoteCard key={index} content={body} index={index} />)
      }
    </div>
  )
}
