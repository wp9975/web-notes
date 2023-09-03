type Props = {
    note: { id: string; title: string; content: string };
    onUpdate: (id: string, note: { title: string; content: string }) => void;
    onDelete: (id: string) => void;
};

const Note: React.FC<Props> = ({ note, onUpdate, onDelete }) => {
    return (
        <div className="border p-4 mb-4">
            <h2 className="text-lg font-bold mb-2">{note.title}</h2>
            <p>{note.content}</p>
            <button className="bg-yellow-500 text-white px-4 py-2" onClick={() => onUpdate(note.id, note)}>Update</button>
            <button className="bg-red-500 text-white px-4 py-2" onClick={() => onDelete(note.id)}>Delete</button>
        </div>
    );
};

export default Note;