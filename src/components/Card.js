import React, { useState, useRef } from 'react';

const Card = ({ word, translation, remember }) => {
    const [text, setText] = useState(word);
    const handleCheck = () => {
        setText(translation);
    }
    return (
        <div className="card">
            <p className={remember ? 'remember' : 'not-remamber'}>
                {remember ? 'Zapamiętane' : 'Nie pamiętasz'}
            </p>
            <h1 className="card-word">{text}</h1>
            <button className="btn btn-success" onClick={() => handleCheck}>Sprawdź!</button>
        </div>
    )
};

export default Card;