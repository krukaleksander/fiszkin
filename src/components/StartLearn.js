import React, { useState, useEffect } from 'react';
import exampleBase from '../database/data';
import BeginerInfo from './BeginerInfo';
import FishPackage from './FishPackage';
import { BiFolderOpen } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import uniqid from 'uniqid';
const StartLearn = () => {
    const baseLocal = JSON.parse(localStorage.getItem("fiszkin"));

    const [data, setData] = useState(exampleBase);
    const [fishes, setFishes] = useState([]);
    const [nameOfPackage, setNameOfPackage] = useState('');
    const [idOfEdit, setIdOfEdit] = useState('');
    const [showDetails, setShowDetails] = useState(false);
    const [showAddPackage, setShowAddPackage] = useState(false);
    const [newPackageName, setNewPackageName] = useState('');
    const [showBeginerInfo, setShowBeginerInfo] = useState(false);
    useEffect(() => {
        if (baseLocal === null) {
            localStorage.setItem('fiszkin', JSON.stringify(exampleBase));
        };
        setData(baseLocal);

    }, [])
    useEffect(() => {
        localStorage.setItem('fiszkin', JSON.stringify(data));
    }, [data]);
    useEffect(() => {
        const firstLogin = localStorage.getItem('fiszkin-first-login');
        if (!firstLogin) {
            setShowBeginerInfo(true);
        }
    }, []);

    const showFish = (index) => {
        const { packageId, packageName, content } = data[index];
        setFishes(content);
        setNameOfPackage(packageName);
        setIdOfEdit(packageId);
        setShowDetails(true)
    }

    const showAddPackageFn = () => {
        setShowAddPackage(true);
    };
    const createNewFolder = (e) => {
        e.preventDefault();

        function formatDate(date) {
            var d = new Date(date),
                month = '' + (d.getMonth() + 1),
                day = '' + d.getDate(),
                year = d.getFullYear();

            if (month.length < 2)
                month = '0' + month;
            if (day.length < 2)
                day = '0' + day;

            return [year, month, day].join('-');
        };

        const newPack = [{
            packageId: uniqid('fish-pack-'),
            packageName: newPackageName,
            creationDate: formatDate(new Date()),
            content: []
        }];

        const newData = data.concat(newPack);
        setData(newData);
        setShowAddPackage(false);
    };
    return (

        <div className="start-learn container" >
            {showBeginerInfo && <BeginerInfo setShowBeginerInfo={setShowBeginerInfo} />}
            <h2 className='alert alert-info start-learn__amount'>Dostępna liczba paczek: {data.length}</h2>
            <div className="packages row justify-content-center">
                {data.map((pack, index) => {
                    const { packageName, creationDate, content } = pack;
                    return (
                        <div className="package col-10" key={index} onClick={() => showFish(index)}>
                            <BiFolderOpen className='package__icon' />
                            <p className="package__length">{content.length}</p>
                            <p className="package__name">{packageName}</p>

                        </div>
                    )
                })}
            </div>
            {showDetails && <FishPackage content={fishes} setData={setData} data={data} name={nameOfPackage} idOfPack={idOfEdit} setShowDetails={setShowDetails} setFishes={setFishes} />}
            <div className="new-package">
                <button className='btn btn-secondary' onClick={showAddPackageFn}>Utwórz paczkę</button>
                {showAddPackage && <form onSubmit={createNewFolder} className='new-package-form'>
                    <VscChromeClose className='new-package-form__close' onClick={() => setShowAddPackage(false)} />
                    <input type="text" className="new-package-form__input" placeholder='nazwa paczki' value={newPackageName} onChange={(e) => setNewPackageName(e.target.value)} />
                    <button type='submit' className='btn btn-info'>Dodaj</button>
                </form>}
            </div>
        </div>
    );
}
export default StartLearn;