import { useState } from 'react';
export default function Player({ initialName, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState(initialName);
    const handleEnditing = () => {
        setIsEditing((editing) => !editing);
    };

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    let playerName = <span className='player-name'>{inputValue}</span>;

    if (isEditing) {
        playerName = (
            <input
                value={inputValue}
                type='text'
                required
                onChange={handleInputChange}
            />
        );
    }

    return (
        <>
            <li>
                <span className='player'>
                    {playerName}
                    <span className='player-symbol'>{symbol}</span>
                </span>
                <button onClick={handleEnditing}>
                    {!isEditing ? 'Edit' : 'Save'}
                </button>
            </li>
        </>
    );
}
