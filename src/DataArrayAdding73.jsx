import { useState } from 'react'

const DataArrayAdding73 = () => {
    const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
    const [inputValue, setInputValue] = useState('');

    const result = notes.map((note, index) => {
        return <li key={index}>{note}</li>;
    });

    const handleClick = () => {
        const newNote = Number(inputValue);
        setNotes([...notes, newNote]);
        setInputValue('');
    };

    return <div>
        <input 
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Введите число"></input>
        <button onClick={handleClick} >Add</button>
        <ul>
            {result}
        </ul>
    </div>;
}

export default DataArrayAdding73