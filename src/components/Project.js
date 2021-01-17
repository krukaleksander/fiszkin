import React from 'react';
const Project = () => {
    return (
        <div className="about">
            <h1 className='about__heading'>Informacje o projekcie</h1>
            <p className="about__par about__par--center">Projekt zrealizowałem w ramach nauki React.</p>
            <p className="about__par about__par--center">Każdy może z Fiszkina korzystać do woli i całkowicie za darmo.</p>
            <h2 className="about__heading-small">Skąd pomysł na Fiszkina?</h2>
            <p className="about__par">Sam wielokrotnie w trakcie nauki języków obcych ( jak i programowania ) korzystałem z fiszek. Zaczynałem od najzwyklejszych karteczek. Kupowało się twardy blok, z którego wycinało się kwadraty. Na nich to robiłem pierwsze fiszki. Na studiach dzięki tej metodzie miałem 5 z angielskiego!</p>
            <p className="about__par">Ostatnio całkowicie przypadkowo natrafiłem na aplikacje służące do nauki z fiszek, co mnie bardzo ucieszyło. Niestety. Jeden program bardzo mocno ograniczał w wersji bezpłatnej. Drugi po prostu zasypywał reklamami co niezwykle irytowało.</p>
            <p className="about__par">Postanowiłem, że wykonam ten projekt jako element do mojego portfolio programisty przy okazji dając Wam darmowe narzędzie do nauki.</p>
            <p className="about__par about__par--greet">Pozdrawiam Was wszystkich</p>
            <p className="about__par about__par--author">Aleksander Kruk</p>
        </div>
    );
}
export default Project;
