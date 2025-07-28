// session-data.tsx
import './session-data.css';
import southAfricaFlag from './assets/Flag_of_South_Africa.svg';

export default function Session_Data({ country, session }) {
    return (
        <div className="race-header">
            <img className="race-flag" src={southAfricaFlag} alt="Flag of South Africa" />
            <div className="race-info">
                <div className="race-title">{ country } Grand Prix: { session }</div>
                <div className="race-timer">00:00:00</div>
            </div>
        </div>
    );
}