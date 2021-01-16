import React, { useState, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';
const Card = ({ fish, setShowCard }) => {
    const { word, translation, remember } = fish;
    const [text, setText] = useState(word);
    const [showRemember, setShowRemember] = useState(false);
    const handleCheck = () => {
        setText(translation);
        setShowRemember(true);
    }
    return (
        <div className="card-blur">
            <VscChromeClose className='card-blur__close' onClick={() => setShowCard(false)} />
            <div className="card">
                <div className='card__back' >
                    <TiArrowLeftOutline />
                </div>
                <div className="card__content">
                    <p className={remember ? 'card__remember' : ' card__not-remamber'}>
                        {remember ? 'Zapamiętane' : 'Nie pamiętasz'}
                    </p>
                    <h1 className="card-word">{text}</h1>
                    <button className="btn btn-info" onClick={handleCheck}>Sprawdź!</button>
                    {showRemember && <div className="card__remember-or-not">
                        <button className='btn btn-success'>Pamiętam</button>
                        <button className='btn btn-warning'>Nie pamiętam</button>
                    </div>}
                </div>
                <div className='card__next' >
                    <TiArrowRightOutline />
                </div>
            </div>
        </div>

    )
};

export default Card;