import React, { useState } from 'react';
import uniqid from 'uniqid';
import { VscChromeClose } from 'react-icons/vsc';
const AddNewFish = ({ fishes, setFishes, data, setData, idOfPack }) => {
    const [addFormFlag, setAddFormFlag] = useState(false);
    const [newWord, setNewWord] = useState('');
    const [newTranslation, setNewTranslation] = useState('');

    const showAddForm = () => {
        setAddFormFlag(true);
    };
    const handleSubmit = (e) => {
        e.preventDefault()

        const newFish = [{
            id: uniqid('fish-'),
            word: newWord,
            translation: newTranslation,
            remember: false
        }];
        const newFishArr = fishes.concat(newFish);

        const newData = data.map(pack => {
            const { packageId, packageName, creationDate } = pack;
            if (packageId === idOfPack) {
                return {
                    packageId,
                    packageName,
                    creationDate,
                    content: newFishArr
                }
            } else {
                return pack;
            };
        });
        setFishes(newFishArr);
        setData(newData);
        setAddFormFlag(false);
        setNewWord('');
        setNewTranslation('');

    };

    const handleWord = (e) => {
        setNewWord(e.target.value);
    };
    const handleTranslation = (e) => {
        setNewTranslation(e.target.value);
    };
    const closeAddNewFish = () => {
        setAddFormFlag(false);
    };

    return (
        <div className="addNewFish">
            <button className="btn btn-success" onClick={showAddForm}>Nowa fiszka</button>
            {addFormFlag && <form onSubmit={handleSubmit} className='add-new-fish'>
                <VscChromeClose className='add-new-fish__close' onClick={closeAddNewFish} />
                <input type="text" className="add-new-fish__input-word" onChange={handleWord} placeholder='nowe słowo' value={newWord} />
                <input type="text" className="add-new-fish__input-translation" onChange={handleTranslation} placeholder='nowe objaśnienie' value={newTranslation} />
                <button type='submit' className='btn btn-success'>Dodaj</button>
            </form>}
        </div>

    );
}

export default AddNewFish;