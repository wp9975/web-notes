import { v4 as uuidv4 } from "uuid";

interface Note {
  id: string;
  title: string;
  content: string;
}

class NoteService {
  private notes: Note[] = [];

  getAllNotes(): Note[] {
    return this.notes;
  }

  getNoteById(id: string): Note | undefined {
    return this.notes.find((note) => note.id === id);
  }

  createNote(note: { title: string; content: string }): Note {
    const newNote: Note = {
      id: uuidv4(),
      title: note.title,
      content: note.content,
    };
    this.notes.push(newNote);
    return newNote;
  }

  updateNote(
    id: string,
    note: { title: string; content: string }
  ): Note | undefined {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      const updatedNote: Note = {
        id,
        title: note.title,
        content: note.content,
      };
      this.notes[index] = updatedNote;
      return updatedNote;
    }
    return undefined;
  }

  deleteNote(id: string): boolean {
    const index = this.notes.findIndex((note) => note.id === id);
    if (index !== -1) {
      this.notes.splice(index, 1);
      return true;
    }
    return false;
  }
}

export default NoteService;
