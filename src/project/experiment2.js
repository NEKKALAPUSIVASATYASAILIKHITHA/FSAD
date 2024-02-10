import React, { useState } from 'react';

function Small() {
    const [value, setValue] = useState(12);

    const increment = () => {
        setValue(value + 1);
    };

    const decrement = () => {
        setValue(value - 1);
    };

    return (
        <center>
            <div style={{backgroundColor:'lightblue',padding:'300px'}}>
                <br />
                <br />
                <button style={{padding :'10px 20px'}}onClick={increment}>+</button>
                <button style={{padding :'10px 20px'}}>{value}</button>
                <button style={{padding :'10px 20px'}} onClick={decrement}>-</button>
            </div>
        </center>
    );
}

export default Small;
