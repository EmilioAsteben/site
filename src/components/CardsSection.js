import info_icon from '../images/icons/info.png';
import { Link, Route, Switch } from "react-router-dom";

function CardSection(props){
    
    const showModal = props.show_modal.setModalj;
    
    return(

        <div className = {`cards__section`}>


            <div className = 'item__one site__card'>
                <Link to = '/cardsite-info' onClick = {(e) => showModal(e, 'card_site')}  className = 'info__icon' href=""><img  src= {info_icon} alt=""/></Link>
            <div className = 'card__header'> 
            <h3>Сайт визитка</h3>
            </div>   
            <ul>
                
                <li>Адаптивный дизайн</li>
                <li>Наполнение сайта</li>
                <li>Ссылки на соцсети</li>
                <li>Счетчик посещаемости</li>
                <li>Карта проезда</li>
            </ul>

            <Link to = '/cardsite-calc' onClick = {(e) => showModal(e, 'card_site_calc')} className ='flat-button'>
             Рассчитать
             стоимость
            </Link>
            
            </div>

            <div className = 'item__two site__card'>
            <Link to = '/landing-info' onClick = {(e) => showModal(e,'landing_page')} className = 'info__icon' href=""><img src= {info_icon} alt=""/></Link>

            <h3>Landing Page</h3>
            <ul>
                
                <li>Прием заказов</li>
                <li>До 5 блоков</li>
                <li>Ссылки на соцсети</li>
                <li>Счетчик посещаемости</li>
                <li>Карта проезда</li>
            </ul>

            <Link to = '/landing-calc' onClick = {(e) => showModal(e, 'card_site_calc')} className ='flat-button'>
             Рассчитать
             стоимость
            </Link>
            
            </div>
                
            </div>


        

    )
}

export default CardSection;