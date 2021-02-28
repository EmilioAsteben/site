import logo from '../images/placeholder-logo.png';
import tg_icon from '../images/icons/telegram.png';
import ws_icon from '../images/icons/watsapp.png';




function Header(){
    
    return(

        <header>
            <div className = 'header__inner'>
            <img className = 'logo' src={logo} alt="wrwr"/>
            <div className = 'right__header'>
            <a className = 'phone-number' href="tel:+79608972121">+7(960)-897-21-21</a>
            <div className = 'messenger__links'>
                <a className = 'tg-icon' href="https://t.me/emilio_asteben"><img src={tg_icon} alt=""/></a>
                <a href=""><img src={ws_icon} alt=""/></a>
            </div>
            </div>
            </div>
            
            
        </header>
    )
}

export default Header;
