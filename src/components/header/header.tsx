import "./style.scss";
import {ReactComponent as BellIcon} from "../../icons/bell.svg"
import {ReactComponent as LookupLogo} from "../../icons/lookup.svg";
import logo from "../../img/logo.png";
import avatar from "../../img/papiez.jpg";

const Header = () => {
    return (
        <header className="header">
            <nav className="header-left">
                <img className="logo header-left-item" src={logo} alt="logo"/>
                <a className="header-left-item navigation-item" href="not-empty" >Strona główna</a>
                <a className="header-left-item navigation-item" href="not-empty" >Seriale i programy</a>
                <a className="header-left-item navigation-item" href="not-empty">Filmy</a>
                <a className="header-left-item navigation-item" href="not-empty">Nowe i popularne</a>
                <a className="header-left-item navigation-item" href="not-empty" >Moja lista</a>
            </nav>
            <div className="header-right">
                <div className="header-right-item">
                    <LookupLogo />
                </div>
                <div className="bell header-right-item">
                    <BellIcon />
                    <div className="number-notifaction-wrapper">
                        <div className="number-notifaction" >5</div>
                    </div>
                </div>
                <div className="avatar-wrapper header-right-item">
                    <img src={avatar} className="avatar" alt="avatar" />
                </div>
            </div>
        </header>
    );
}

export default Header;