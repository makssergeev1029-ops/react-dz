import { useState } from 'react'

const DataArrayOperations74 = () => {
    const [num, setNum] = useState([1, 2, 3, 4, 5]);

    const handleClick = (index) => {
        const newNum = num.map((item, i) => {
            if (i === index) {
                return item ** 2;
            }
            return item;
        });

        setNum(newNum)
    }

    const deleteClick = (index) => {
        setNum(num.filter((item, i) => i !== index));
    }

    const result = num.map((item, index) => {
        return (
            <li key={index} onClick={() => handleClick(index)} style={{ cursor: 'pointer' }}>
                {item}
                <button onClick={(e) => {
                    e.stopPropagation();
                    deleteClick(index);
                }} >удалить</button>
            </li>
        );
    }); 

    return <div>
        <ul>
            {result}
        </ul>
        <input ></input>
    </div>
}

export default DataArrayOperations74