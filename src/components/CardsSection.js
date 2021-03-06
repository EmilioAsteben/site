import info_icon from '../images/icons/info.png';
import {useRef, useEffect} from 'react';
import { Link, Route, Switch } from "react-router-dom";
import Swiper from 'swiper';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.min.css';
import '../swiperadd.css';




function CardSection(props){
    
    const params = {
        spaceBetween:50,
      slidesPerView:1,
      centeredSlides:true,
      init:false,
      width:600
      
      
      
      
    }

    const swiper = useRef(null)
    useEffect(()=>{
        swiper.current=new Swiper('.swiper-container',{
            spaceBetween:10,
            centeredSlides:true,
            slidesPerView:2,
            autoHeight:true,
            slidesOffsetAfter:60
            
           
            



        }
        
        
        ) },
        
        [])
    

      
    
    const showModal = props.show_modal.setModalj;

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    console.log(vw);
    
    return(

        <div className = 'cards__section swiper-container'>
        <div className="swiper-wrapper">

            <div className = 'item__one site__card swiper-slide'>
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
    
            

            
            <div className = 'item__two site__card swiper-slide'>
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
            </div>


        

    )
}

export default CardSection;