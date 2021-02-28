import '../modal.scss';
import { Link, Route, Switch, useParams, useRouteMatch } from "react-router-dom";

import closeButton from '../images/icons/close.png';
import laptop_cd from '../images/laptop-cd.png' ;
import tablet_cd from '../images/tablet-cd.png' ;
import phone_cd from '../images/phone-cd.png' ;

import tablet from '../images/tablet.png' ;

import CardModal from './CardModal';
import Stages from './Stages';
import Calculator from './Calculator';
import Form from './Form';

import { useState, useEffect } from 'react';


const cardModalContent = {

    cardSite: {

        heading: <h3>Сайт Визитка</h3>,

        text: 
        <p>
            Небольшой сайт, состоящий из одной или нескольких страниц, содержащий основную информацию об организации, частном лице, компании, товарах или услугах, прейскуранты, контактные данные
        </p>,

        list: 
        <section className = "modal__list__section">
            <h4>Основные разделы сайта:</h4>
        <ul>
            <li>О компании</li>
            <li>Услуги и цены</li>
            <li>Контакты</li>
        </ul>
        
        </section>,
        
        images: {
            laptop:laptop_cd,
            tablet:tablet_cd,
            phone:phone_cd,

    
        }
        
    },

    landingPage: {
        heading: <h3>Landing Page</h3>,
        text: 
        <p>
            Одностраничный сайт, который продвигает и предоставляет информацию о  конкретном предложении, товаре или услуге, собирает и передает контактные данные потенциального клиента владельцу сайта.
        </p>,
        

        list: 
        <section className = "modal__list__section">
            <h4>Landing page включает в себя:</h4>
        <ul>
            <li>До 5 информационных блоков</li>
            <li>Поле контактов</li>
            <li>Форму для заполнения</li>
        </ul>
        </section>,
        
    
    images: {
        tablet: tablet,

    }
     
}
}



function Modal(props){
    
    
  
    let content = props.show_modal.content;
    let {modal_content} = useParams();
    let {url, path} = useRouteMatch();
    const closeModal = props.show_modal.setModalj;
    const setForm = props.show_modal.setForm;
    console.log(useRouteMatch());
    console.log(url);
    useEffect(() => {
        
    
    

    })

 

    
    let modalContent = 
    modal_content === 'cardsite-info' ?
    cardModalContent.cardSite :
    cardModalContent.landingPage || ''
    ;

    const cardModal = 
    <CardModal content = {modalContent}
     modal_handler = {props.show_modal.setModalj}
     />;


     let modalClassName =      
     modal_content == 'cardsite-calc' ||
     modal_content ==  'landing-calc' ||
     modal_content == 'form' 
      ?
     'modal__calc' : 'modal__content';



return(

<div className = 'modal' >

    
    <div className = 'modal__background' onClick = {(e) => closeModal(e)}><Link className = 'background__route__link' to='/'></Link></div>
    <div className = {modalClassName}>
    <button onClick = {(e) => closeModal(e)} className="close__modal">
    <Link to='/'><img src={closeButton} alt="close_button"/></Link>
    </button>
   

   <Switch>

    <Route path ='/cardsite-info'>{ modal_content === 'cardsite-info' && cardModal}</Route>

    <Route path ='/landing-info'>{(modal_content  === 'landing-info' && cardModal)}</Route>

    <Route path ='/stages'> {modal_content === 'stages' && <Stages/>}</Route> 

    <Route exact path={["/cardsite-calc", "/landing-calc"]}>{(modal_content === 'landing-calc' || 'cardsite-calc')  && <Calculator setForm = {setForm} setModal = {closeModal} checkedOption = {props.checkedOption}/>}
    </Route> 
    
    <Route  path = {`${url}/form`}>  <Form content = {content} setModal = {closeModal} /></Route>
    
    </Switch>
    



    </div>

    </div>
)
}

export default Modal;
