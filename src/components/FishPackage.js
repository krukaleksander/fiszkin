import React, { useState, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import { GiCheckMark } from 'react-icons/gi';
import uniqid from 'uniqid';

const FishPackage = ({ content, name, idOfPack, setShowDetails, data, setData }) => {
    const [fishes, setFishes] = useState(content);
    const [editWord, setEditWord] = useState('');
    const [editTranslation, setEditTranslation] = useState('');
    const [editWordId, setEditWordId] = useState('');
    const [showEditFish, setShowEditFish] = useState(false);


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
                    console.log(fish.id)
                    console.log()
                    if (fish.id === editWordId) {
                        return fishAfterEdit;
                    } else {
                        return fish;
                    };
                });

                // koniec edycji
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
            <div className="words-wrapper">
                {fishes.map((fish, index) => {
                    const { word, translation, id } = fish;
                    return (
                        <div className="word" key={index}>
                            <AiFillEdit className='word__edit' onClick={() => editItem(word, translation, id)} />
                            <div className='word__details'>
                                <p className='word__name'>{word}</p>
                                <div className="word__underline"></div>
                                <p className='word__translation'>{translation}</p>
                            </div>
                            <RiDeleteBinFill className='word__remove' onClick={() => removeItem(index)} />

                        </div>
                    )
                })}
            </div>
            {showEditFish && <form className="edit-fish" onSubmit={handleSubmitEdit}>
                <VscChromeClose className='package-present__close' onClick={closeEditFish} />
                <input className='edit-fish__input' type="text" value={editWord} onChange={(e) => setEditWord(e.target.value)} />
                <textarea className='edit-fish__textarea' name="translation" id="" cols="30" rows="10" value={editTranslation} onChange={(e) => setEditTranslation(e.target.value)}></textarea>
                <button type='submit' className='edit-fish__buton'><GiCheckMark /></button>
            </form>}
        </div>
    );
}

export default FishPackage;