import React from 'react';
import { BiInfoCircle } from 'react-icons/bi';
const BeginerInfo = ({ setShowBeginerInfo }) => {

    const hideBeginerMsg = () => {
        setShowBeginerInfo(false);
        localStorage.setItem('fiszkin-first-login', 'not-new');
    }

    return (
        <div className="beginer-info">
            <h2 className="beginer-info__heading">Witaj użytkowniku!</h2>
            <p>Ta wiadomość wyświetli Ci się tylko raz.</p>
            <p>Fiszkin korzysta z pamięci w Twojej przeglądarce, co oznacza, że musisz używać zawsze z tej samej</p>
            <p>Jeśli zazwyczaj uczysz się z telefonem i lubisz przeglądarkę Firefox, Chrome, Safari albo jakąkolwiek inną - korzystaj tej samej.</p>
            <button className="btn btn-info" onClick={hideBeginerMsg}>Zrozumiałem</button>
        </div>
    );
}

export default BeginerInfo;