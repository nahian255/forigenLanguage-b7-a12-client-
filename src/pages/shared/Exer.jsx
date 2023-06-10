import React, { useState } from 'react';

function ButtonList() {
    const [disabledButtons, setDisabledButtons] = useState([]);

    const handleButtonClick = (index) => {
        setDisabledButtons((prevDisabledButtons) => {
            const updatedDisabledButtons = [...prevDisabledButtons];
            updatedDisabledButtons[index] = true;
            return updatedDisabledButtons;
        });
        // Perform other actions or logic after the button is clicked
    };

    const data = ['Button 1', 'Button 2', 'Button 3'];

    return (
        <div>
            {data.map((buttonText, index) => (
                <button
                    className="btn btn-info"
                    key={index}
                    disabled={disabledButtons[index]}
                    onClick={() => handleButtonClick(index)}
                >
                    {buttonText}
                </button>
            ))}
        </div>
    );
}

export default ButtonList;
