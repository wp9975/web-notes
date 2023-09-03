import Note from './Note';

type Props = {
    notes: { id: string; title: string; content: string }[];
    onUpdate: (id: string, note: { title: string; content: string }) => void;
    onDelete: (id: string) => void;
};

const NoteList: React.FC<Props> = ({ notes, onUpdate, onDelete }) => {
    return (
        <div className='mx-10 border-2 border-white w-full'>
            {notes.map((note) => (
                <Note key={note.id} note={note} onUpdate={onUpdate} onDelete={onDelete} />
            ))}
        </div>
    );
};

export default NoteList;