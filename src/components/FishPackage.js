import React, { useState, useRef } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import uniqid from 'uniqid';

const FishPackage = ({ content, name, idOfPack, setShowDetails, data, setData }) => {
    const [fishes, setFishes] = useState(content);
    const [editWord, setEditWord] = useState('parrot');
    const [editTranslation, setEditTranslation] = useState('papuga');
    const [showEditFish, setShowEditFish] = useState(false);


    const removeItem = (index) => {
        const newData = data.map((pack) => {
            console.log('generating newData');
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
        // function with is editing existing fish       
        // po kliknięciu w konkretną ikonkę generowany jest stan z word, translation i id
        // pojawiają się input i text area, które są kontrolowane onChange z wartością aktualną. 
        // jak delikwent kliknie w ikonkę że akceptuje to stan się czyści, i zmieniana jest wartośc konkretnej fiszki 
        //odnalezionej po id
        setShowEditFish(true);

    };

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
                    const { word, translation } = fish;
                    return (
                        <div className="word" key={index}>
                            <AiFillEdit className='word__edit' onClick={editItem} />
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
            {showEditFish && <div className="edit-fish">
                <VscChromeClose className='package-present__close' onClick={closeEditFish} />
                <input className='edit-fish__input' type="text" value={editWord} onChange={(e) => setEditWord(e.target.value)} />
                <textarea className='edit-fish__textarea' name="translation" id="" cols="30" rows="10" value={editTranslation} onChange={(e) => setEditTranslation(e.target.value)}></textarea>
            </div>}
        </div>
    );
}

export default FishPackage;