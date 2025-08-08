import React, { useState } from 'react';

const ButtonCounter = () => {
    // Step 1: Initialize state
    const [count, setCount] = useState(0);

    // Step 2: Event handling function
    const handleClick = () => {
        setCount(count + 1); // Increment count
    };

    // Step 3: Display the counter
    return (
        <div>
            <p>Button clicked {count} times</p>
            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
};

export default ButtonCounter;