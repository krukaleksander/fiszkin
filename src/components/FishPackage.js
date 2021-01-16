import React, { useState, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { GiCheckMark } from 'react-icons/gi';
import AddNewFish from './AddNewFish';
import Card from './Card';

const FishPackage = ({ content, name, idOfPack, setShowDetails, data, setData }) => {
    const [fishes, setFishes] = useState(content);
    const [editWord, setEditWord] = useState('');
    const [editTranslation, setEditTranslation] = useState('');
    const [editWordId, setEditWordId] = useState('');
    const [showEditFish, setShowEditFish] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [indexOfFish, setIndexOfFish] = useState(0);

    const checkIndex = (number) => {
        if (number > fishes.length - 1) return 0;
        if (number < 0) return fishes.length - 1;
        return number

    };
    const changeIndex = (flag) => {
        if (flag === 'plus') setIndexOfFish(checkIndex(indexOfFish + 1));
        if (flag === 'minus') setIndexOfFish(checkIndex(indexOfFish - 1));
        console.log(indexOfFish)
    };
    const removeItem = (index) => {
        const newData = data.map((pack) => {
            if (pack.packageId === idOfPack) {
                const { packageName, creationDate, content } = pack;
                const itemToRemove = content[index];
                const newContent = content.filter((pair) => pair !== itemToRemove);
                setFishes(newContent);
                return {
                    packageId: idOfPack,
                    packageName,
                    creationDate,
                    content: newContent
                }

            } else {

                return pack;
            }
        });
        setData(newData);
    };

    const editItem = (word, translation, id) => {
        setEditWord(word);
        setEditTranslation(translation);
        setEditWordId(id);
        setShowEditFish(true);

    };

    const handleSubmitEdit = (e) => {
        e.preventDefault();
        const fishAfterEdit = {
            id: editWordId,
            word: editWord,
            translation: editTranslation,
            remember: false
        };
        const newData = data.map((pack) => {
            if (pack.packageId === idOfPack) {
                const { packageName, creationDate, content } = pack;
                const newContent = content.map((fish) => {
                    if (fish.id === editWordId) {
                        return fishAfterEdit;
                    } else {
                        return fish;
                    };
                });

                setFishes(newContent);
                return {
                    packageId: idOfPack,
                    packageName,
                    creationDate,
                    content: newContent
                }

            } else {

                return pack;
            }
        });
        setData(newData);
        setShowEditFish(false);

    }

    const closeContainer = () => {
        setShowDetails(false);
    };
    const closeEditFish = () => {
        setShowEditFish(false);
    }
    return (
        <div className="package-present">
            <VscChromeClose className='package-present__close' onClick={closeContainer} />
            <h1 className="package-present__title">{name}</h1>
            <button className='btn btn-primary package-present__learn-btn' onClick={() => setShowCard(true)}>Sprawdź się!</button>
            {showCard && <Card fish={fishes[indexOfFish]} setShowCard={setShowCard} changeIndex={changeIndex} />}
            <AddNewFish fishes={fishes} setFishes={setFishes} data={data} setData={setData} idOfPack={idOfPack} />
            <div className="words-wrapper">
                {fishes.map((fish, index) => {
                    const { word, translation, id, remember } = fish;
                    return (
                        <div className="word" key={index}>
                            <AiFillEdit className='word__edit' onClick={() => editItem(word, translation, id)} />
                            <div className='word__details'>
                                <p className='word__name'>{word}</p>
                                <div className="word__underline"></div>
                                <p className='word__translation'>{translation}</p>
                                <p className={remember ? 'word__remember word__remember--true' : 'word__remember'}>{remember ? 'pamiętasz' : 'nie pamiętasz'}</p>
                            </div>
                            <RiDeleteBinFill className='word__remove' onClick={() => removeItem(index)} />

                        </div>
                    )
                })}
            </div>
            {showEditFish && <form className="edit-fish" onSubmit={handleSubmitEdit}>
                <VscChromeClose className='edit-fish__close' onClick={closeEditFish} />
                <input className='edit-fish__input' type="text" value={editWord} onChange={(e) => setEditWord(e.target.value)} />
                <textarea className='edit-fish__textarea' name="translation" id="" cols="20" rows="5" value={editTranslation} onChange={(e) => setEditTranslation(e.target.value)}></textarea>
                <button type='submit' className='edit-fish__buton'><GiCheckMark /></button>
            </form>}
        </div>
    );
}

export default FishPackage;