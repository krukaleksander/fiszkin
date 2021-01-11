import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';
import uniqid from 'uniqid';

const FishPackage = ({ content, name, idOfPack, setShowDetails, data, setData }) => {
    const [fishes, setFishes] = useState(content);

    const removeItem = (index) => {
        console.log('im working');
        const newData = data.map((pack) => {
            console.log('generating newData');
            if (pack.packageId === idOfPack) {
                console.log('id match')
                console.log(pack);
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
                console.log('id do not match')
                console.log(pack);
                console.log(`Package id: ${pack.packageId}, id in state: ${idOfPack}`)
                return pack;
            }
        });
        setData(newData);
    };

    const editItem = (word, translation, id) => {
        // function with is editing existing fish
    };

    const closeContainer = () => {
        setShowDetails(false);
    };
    return (
        <div className="package-present">
            <VscChromeClose className='package-present__close' onClick={closeContainer} />
            <h1 className="package-present__title">{name}</h1>
            <div className="words-wrapper">
                {fishes.map((fish, index) => {
                    const { word, translation } = fish;
                    return (
                        <div className="word" key={index}>
                            <AiFillEdit className='word__edit' />
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
        </div>
    );
}

export default FishPackage;