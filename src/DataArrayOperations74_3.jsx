import { useState } from 'react';

const DataArrayOperations74_2 = () => {
    const [notes, setNotes] = useState(['Яблоко', 'Банан', 'Груша', 'Апельсин']);
    const [inputValue, setInputValue] = useState('');

    const [editIndex, setEditIndex] = useState(null);

    const handleLiClick = (text, index) => {
        setInputValue(text);
        setEditIndex(index);
    };

    const handleInputBlur = () => {
        if (editIndex === null) return;

        const updatedNotes = notes.map((item, i) => {
            if (i === editIndex) {
                return inputValue;
            }
            return item;
        });

        setNotes(updatedNotes);
        setInputValue('');
        setEditIndex(null);
    };

    const result = notes.map((item, index) => {
        return (
            <li
                key={index}
                onClick={() => handleLiClick(item, index)}
            >
                {item}
            </li>
        );
    });

    return (
        <div>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onBlur={handleInputBlur}
                placeholder=""
            />

            <ul>
                {result}
            </ul>
        </div>
    );
};

export default DataArrayOperations74_2;
