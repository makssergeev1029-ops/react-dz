import { useState } from 'react';

const DataArrayOperations74_5 = () => {
    const [num, setNum] = useState([1, 2, 3, 4, 5]);

    const handleReverse = () => {
        const reversedNum = [...num].reverse();

        setNum(reversedNum);
    };

    const result = num.map((item, index) => {
        return <li key={index}>{item}</li>;
    });

    return (
        <div>
            <button onClick={handleReverse}>
                Перевернуть список
            </button>

            <ul>
                {result}
            </ul>
        </div>
    );
};

export default DataArrayOperations74_5;
