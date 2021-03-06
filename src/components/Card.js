import React, { useState, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { TiArrowLeftOutline, TiArrowRightOutline } from 'react-icons/ti';
import { useEffect } from 'react';
const Card = ({ fish, setShowCard, changeIndex, setIndexOfFish, setRemember }) => {

    useEffect(() => {
        setActualFish(fish);
        setText(fish.word);
        setShowRemember(false);
    }, [fish]);

    const [actualFish, setActualFish] = useState(fish);
    const { id, word, translation, remember } = actualFish;
    const [text, setText] = useState(word);
    const [showRemember, setShowRemember] = useState(false);
    const handleCheck = () => {
        setText(translation);
        setShowRemember(true);
    };
    return (
        <div className="card-blur">
            <VscChromeClose className='card-blur__close' onClick={() => {
                setShowCard(false);
                setIndexOfFish(0);
            }} />
            <div className="card">
                <div className='card__back' >
                    <TiArrowLeftOutline onClick={() => changeIndex('minus')} />
                </div>
                <div className="card__content">
                    <p className={remember ? 'card__remember' : ' card__not-remamber'}>
                        {remember ? 'Zapamiętane' : 'Nie pamiętasz'}
                    </p>
                    <h1 className="card-word">{text}</h1>
                    <button className="btn btn-info" onClick={handleCheck}>Sprawdź!</button>
                    {showRemember && <div className="card__remember-or-not">
                        <button className='btn btn-success' onClick={() => {
                            setRemember(id, 'remember');
                            changeIndex('plus');
                        }}>Pamiętam</button>
                        <button className='btn btn-warning' onClick={() => {
                            setRemember(id, 'not-remember');
                            changeIndex('plus');
                        }}>Nie pamiętam</button>
                    </div>}
                </div>
                <div className='card__next' >
                    <TiArrowRightOutline onClick={() => changeIndex('plus')} />
                </div>
            </div>
        </div>

    )
};

export default Card;