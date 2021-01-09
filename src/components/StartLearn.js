import React, { useState, useEffect } from 'react';
import exampleBase from '../database/data';
import Card from './Card';
import { BiFolderOpen } from 'react-icons/bi';
const StartLearn = () => {
    const [data, setData] = useState(exampleBase);
    const [fishIndex, setFishIndex] = useState(0);
    return (

        <div className="start-learn" >
            <h1> Rozpocznij naukę! </h1>
            <h2>Dostępna liczba paczek: {data.length}</h2>
            <div className="packages">
                {data.map((pack, index) => {
                    const { packageName, creationDate, content } = pack;
                    return (
                        <div className="package" key={index}>
                            <BiFolderOpen className='package__icon' />
                            <p className="package__length">{content.length}</p>
                            <p className="package__name">{packageName}</p>
                            <p className="package__creation-date">Utworzono: {creationDate}</p>

                        </div>
                    )
                })}
            </div>

        </div>
    );
}
export default StartLearn;