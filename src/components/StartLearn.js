import React, { useState, useEffect } from 'react';
import exampleBase from '../database/data';
import Card from './Card';
import FishPackage from './FishPackage';
import { BiFolderOpen } from 'react-icons/bi';
const StartLearn = () => {
    const [data, setData] = useState(exampleBase);
    const [fishes, setFishes] = useState([]);
    const [nameOfPackage, setNameOfPackage] = useState('');
    const [showDetails, setShowDetails] = useState(false);

    const showFish = (index) => {
        const { packageName, content } = data[index];
        setFishes(content);
        setNameOfPackage(packageName);
        setShowDetails(true)
    }
    return (

        <div className="start-learn container" >
            <h2 className='alert alert-info display-12'>Dostępna liczba paczek: {data.length}</h2>
            <div className="packages row justify-content-center">
                {data.map((pack, index) => {
                    const { packageName, creationDate, content } = pack;
                    return (
                        <div className="package col-10 justify-content-between" key={index} onClick={() => showFish(index)}>
                            <BiFolderOpen className='package__icon' />
                            <p className="package__length">{content.length}</p>
                            <p className="package__name">{packageName}</p>
                            <p className="package__creation-date">Utworzono: {creationDate}</p>

                        </div>
                    )
                })}
            </div>
            {showDetails && <FishPackage content={fishes} setData={setData} data={data} name={nameOfPackage} setShowDetails={setShowDetails} setFishes={setFishes} />}
            <div className="new-package">
                <button className='btn btn-secondary'>Utwórz paczkę</button>
            </div>
        </div>
    );
}
export default StartLearn;