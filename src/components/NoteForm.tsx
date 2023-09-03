import { useState } from 'react'


type Props = {
    onSave: (note: { title: string; content: string }) => void;
};

const NoteForm = (props: Props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSave = () => {
        props.onSave({ title, content });
        setTitle('');
        setContent('');
    };

    return (
        <div className="border p-4 mb-4 flex flex-col w-full lg:w-1/3 ">
            <h2 className="text-lg font-bold mb-2">Create Note</h2>
            <input
                type="text"
                placeholder="Title"
                className="border p-2 mb-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Content"
                className="border p-2 mb-2"
                rows={4}
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className="bg-blue-500 text-white px-4 py-2" onClick={handleSave}>
                Save
            </button>
        </div>
    );
}

export default NoteForm