import React from 'react';
const FishPackage = ({ content, name }) => {
    const fishes = content;
    return (
        <div className="package-present">
            <h1 className="package-present__title">{name}</h1>
            <div className="words-wrapper">
                {fishes.map((fish, index) => {
                    const { word, translation } = fish;
                    return (
                        <div className="word" key={index}>
                            <p className='word__name'>{word}</p>
                            <p className='word__translation'>{translation}</p>

                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default FishPackage;