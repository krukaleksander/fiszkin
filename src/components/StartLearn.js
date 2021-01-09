import React, { useState, useEffect } from 'react';
import exampleBase from '../database/data';
const StartLearn = () => {
    const [data, setData] = useState(exampleBase);
    return (
        <div className="start-learn" >
            <h1> Rozpoczynasz naukę! </h1>
        </div>
    );
}
export default StartLearn;