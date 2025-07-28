// header.tsx
import './header.css';
import Session_Data from './session-data';

export default function Header() {
    return (
        <div className="header-container">
            <Session_Data country = "South African" session = "Race"/>
        </div>
    );
}