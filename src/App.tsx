
import { useState } from 'react';
import NoteForm from './components/NoteForm'
import NoteList from './components/NoteList'
import NoteService from './services/NoteService';

const noteService = new NoteService();

function App() {
  const [notes, setNotes] = useState(noteService.getAllNotes());

  const handleSave = (note: { title: string; content: string }) => {
    const newNote = noteService.createNote(note);
    setNotes([...notes, newNote]);
  };

  const handleUpdate = (id: string, note: { title: string; content: string }) => {
    const updatedNote = noteService.updateNote(id, note);
    if (updatedNote) {
      setNotes(notes.map(n => n.id === id ? updatedNote : n));
    }
  };

  const handleDelete = (id: string) => {
    if (noteService.deleteNote(id)) {
      setNotes(notes.filter(n => n.id !== id));
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 w-full min-w-[800px]">
        <h1 className="text-2xl font-bold mb-4 text-center">Web Notes App</h1>
        <div className='md:flex'>
          <NoteForm onSave={handleSave} />
          <NoteList notes={notes} onUpdate={handleUpdate} onDelete={handleDelete} />
        </div>
      </div>
    </>
  )
}

export default App
