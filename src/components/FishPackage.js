import React, { useState } from 'react';
import { VscChromeClose } from 'react-icons/vsc';
import { AiFillEdit } from 'react-icons/ai';
import { RiDeleteBinFill } from 'react-icons/ri';

const FishPackage = ({ content, name, setShowDetails, data, setData }) => {
    const [fishes, setFishes] = useState(content);

    const removeItem = (name, index) => {
        const newData = data.map((pack) => {
            if (pack.packageName === name) {
                console.log('in the case')
                const { packageName, creationDate, content } = pack;
                const itemToRemove = content[index];
                const newContent = content.filter((pair) => pair !== itemToRemove);
                setFishes(newContent);
                return {
                    packageName,
                    creationDate,
                    content: newContent
                }

            } else {
                return pack;
            }
        });
        console.log(newData);
        setData(newData);
    }

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
                            <RiDeleteBinFill className='word__remove' onClick={() => removeItem(name, index)} />

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FishPackage;