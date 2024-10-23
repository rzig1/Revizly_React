import React, { useState, useEffect } from 'react';

const NotesApp = () => {
    const [notes, setNotes] = useState([]);
    const [newNoteText, setNewNoteText] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editingNoteId, setEditingNoteId] = useState(null);

    useEffect(() => {
        // Load notes from local storage when component mounts
        const storedNotes = JSON.parse(localStorage.getItem('notes')) || [];
        setNotes(storedNotes);
    }, []);

    const handleCreateNote = () => {
        if (newNoteText.trim() !== '') {
            const newNote = {
                id: Date.now(),
                text: newNoteText,
            };

            const updatedNotes = [...notes, newNote];
            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            setNewNoteText('');
        }
    };

    const handleEditNote = (noteId) => {
        const noteToEdit = notes.find(note => note.id === noteId);
        setNewNoteText(noteToEdit.text);
        setIsEditing(true);
        setEditingNoteId(noteId);
    };

    const handleUpdateNote = () => {
        if (newNoteText.trim() !== '') {
            const updatedNotes = notes.map(note =>
                note.id === editingNoteId ? { ...note, text: newNoteText } : note
            );

            setNotes(updatedNotes);
            localStorage.setItem('notes', JSON.stringify(updatedNotes));
            setNewNoteText('');
            setIsEditing(false);
            setEditingNoteId(null);
        }
    };

    const handleDeleteNote = (noteId) => {
        const updatedNotes = notes.filter(note => note.id !== noteId);
        setNotes(updatedNotes);
        localStorage.setItem('notes', JSON.stringify(updatedNotes));
    };

    return (
        <main className="flex items-center justify-center min-h-screen ">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden w-96 p-4">
                <header className="flex items-center justify-between mb-4">
                    <h1 className="text-xl font-semibold">Notes</h1>
                    <button
                        className=" text-white rounded p-2"
                        onClick={() => { setIsEditing(false); setNewNoteText(''); }}
                    >
                        <i className="fas fa-plus"></i>
                    </button>
                </header>
                <textarea
                    className="w-full h-24 p-2 border rounded mb-4"
                    placeholder="Enter your note..."
                    value={newNoteText}
                    onChange={(e) => setNewNoteText(e.target.value)}
                />
                <button
                    className={`w-full py-2 rounded ${isEditing ? 'bg-blue-500' : 'bg-primary-color'} text-white`}
                    onClick={isEditing ? handleUpdateNote : handleCreateNote}
                >
                    {isEditing ? 'Update Note' : 'Create Note'}
                </button>
                <ul className="mt-4">
                    {notes.map(note => (
                        <li key={note.id} className="flex justify-between items-center bg-gray-200 p-2 mb-2 rounded">
                            <span>{note.text}</span>
                            <div>
                                <button
                                    className="text-yellow-500 mx-1"
                                    onClick={() => handleEditNote(note.id)}
                                >
                                    <i className="fas fa-pen"></i>
                                </button>
                                <button
                                    className="text-red-500 mx-1"
                                    onClick={() => handleDeleteNote(note.id)}
                                >
                                    <i className="fas fa-trash"></i>
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default NotesApp;
