import { useEffect, useState } from 'react';
import CardsSection from './CardsSection';
import Modal from './Modal';
import { Link, Route, Switch, useLocation, useRouteMatch } from "react-router-dom";



function Content(props){


    const [optionChecked, setOptionChecked] = 
    useState({
        host_domain: true,
        search_index: false,
        ssl: false,
        map: false,
        open_graph: false,

    });

    const checkedOption = {

        optionChecked: optionChecked,
        setOptionChecked: setOptionChecked,
    }





    
    let modalWindow;
    
        modalWindow = <Route path = '/:modal_content'><Modal checkedOption = {checkedOption} show_modal = {props.show_modal}/></Route>
     
  
return(

    
    <div className ='container_wrapper'>
    <div className = 'container'>
    
       {   
           modalWindow
       }
        

    <h1 className = 'container__heading'>Разработка веб-сайтов в <br/> городе Элиста</h1>

    <div className="middle__content">
    <Route exact path ='/'>
    <CardsSection show_modal = {props.show_modal}/>
    </Route>

    
    <Link to = '/stages' onClick = {(e)=>props.show_modal.setModalj(e, 'stages_of_work')} href='' className = 'order__link'>Порядок выполнения работ</Link>

    </div>
    <div className="show__works">
    
    
        <a>Смотреть портфолио</a>
    <img src="http://image.flaticon.com/icons/svg/3/3907.svg" id="arrow" className="animated bounce"/>
    
    </div>

    
    </div>
    </div>


)
}

export default Content;
