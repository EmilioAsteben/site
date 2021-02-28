import React, { useState, useEffect } from 'react';
import '../calculator.scss';
import ssl_icon from '../images/icons/ssl.png';
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";

// onClick = {(e) => showInfo(e)}
const information = {
    host_domain:
    <div className = 'information__content'>
    <p><b>Домен</b> - адрес сайта</p>
    <p><b>Хостинг</b> - услуга по предоставлению сервера, на котором располагается веб-сайт </p>
    </div> ,

    search_index:
    <div className="information__content">
        <p>
        <b>Индексация</b> - добавление содержимого сайта в индекс поисковых систем, что позволяет пользователям получать ссылку на ваш сайт при поисковом запросе по ключевым словам.
        </p>
        </div>, 

    ssl:
    <div className="information__content">
        <p> <b>SSL сертификат </b> -  цифровая подпись сайта, позволяющая передавать данные по защищенному протоколу https.
            Добавляет  значок <img src={ssl_icon} alt="ssl"/> в адресной строке и поднимает сайт в выдаче поисковых систем. 
        </p>
    </div>,

    map:
    <div className="information__content">
        <p>Добавление на сайт интерактивной или статичной <b>Yandex карты</b> с месторасположенинем организации</p>
    </div>,

    open_graph:
    <div className="information__content">
        <p><b>Open Graph -</b> <br/> разметка позволяющая стилизовать и задавать содержимое при вставке ссылки на ваш сайт в социальных сетях и мессенджерах</p>
    </div>




    

}


function Calculator(props) {
    
    let {url, path} = useRouteMatch();
    
    let website = url == '/cardsite-calc' ? 'cardsite' : 'landing';

    let websiteHeading = url == '/cardsite-calc' ? 'Сайт визитка' : 'Landing page';

    let cardsitePrice = 6300;
    let landingPrice = 7300;

    
    
    const optionDisabled = url == '/landing-calc' ?
     {disabled: true, checked: true} :
     {disabled: false};

    const checked = props.checkedOption.optionChecked;
    const setChecked = props.checkedOption.setOptionChecked;



    let websitePrice = website == 'cardsite' ? cardsitePrice : landingPrice;
    let initialPrice = websitePrice +
      (checked.host_domain && 400)  +
      (checked.search_index && 700) +
      (checked.ssl && 500) +
      ((checked.map || website == 'landing') && 600) + 
      (checked.open_graph && 500);
    
    const [info, setInfo] = useState('host_domain');
    const [totalPrice, setPrice ] = useState(initialPrice);
    
    


    function showInfo(option){
        
        setInfo(option);
        
    }

    

    function addRemoveOption(e, price, optionName){
        
        setChecked({...checked, [optionName]: !checked[optionName]});
        let optionChecked = e.target.checked;
        let startPrice = totalPrice;
        let endPrice; 
        let step = 20;
        
    
        optionChecked ?  
        endPrice = totalPrice + price :
         endPrice = totalPrice - price;

        
        function incrementPrice() {
            startPrice += step
        }

        function decrementPrice() {
            startPrice -=step
        }

        let count = optionChecked ? incrementPrice : decrementPrice; 

        
        let priceCounter = setInterval(() => {

            setPrice((prev) => optionChecked ? prev + step : prev - step);
            count();

            if(startPrice == endPrice){

                clearInterval(priceCounter)
                startPrice = null;
                endPrice = null;
            
            }
        }, 10);
    }
    
    return(
        <div className = 'calculator'>

            <div className="calculator__left__inner">

                    <h3>
                    {websiteHeading}
                    </h3>

                <section>
                
                <ul className = 'option__list'>

                    <li onMouseOver = {() => showInfo('host_domain')}>
                        
                         <input  onClick = {(e) => addRemoveOption(e, 400, 'host_domain')}   type="checkbox" name = 'host_domain' id = 'host_domain' defaultChecked = {checked.host_domain}  />
                         <h5><label htmlFor="host_domain"> Хостинг и домен</label></h5>
                         
                        
                    </li>

                    <li onMouseOver = {() => showInfo('search_index')}>
                        
                        <input onClick = {(e) => addRemoveOption(e,700,'search_index')}  type="checkbox" id = 'search_index' defaultChecked = {checked.search_index}/>
                        
                            <h5><label htmlFor="search_index">Индексация Yandex/Google</label></h5>
                            
                        
                    </li>

                    <li onMouseOver = {() => showInfo('ssl')}>
                        
                        <input onClick = {(e) => addRemoveOption(e,500, 'ssl')} type="checkbox" name = 'ssl' id = 'ssl' defaultChecked = {checked.ssl}value = 'ssl'/> 
                        <h5><label htmlFor="ssl">SSL сертификат</label> </h5>
                        
                          
                        
                    </li>

                    <li onMouseOver = {() => showInfo('map')}>
                        
                        <input {...optionDisabled} onClick = {(e) => addRemoveOption(e,600, 'map')} type="checkbox" id = 'map' defaultChecked = {checked.map} name = 'map' value = 'ssl'/> 
                        <h5><label htmlFor="map">Яндекс карта</label></h5>
                        
                    </li>

                    <li onMouseOver = {() => showInfo('open_graph')}>
                        
                        <input onClick = {(e) => addRemoveOption(e,500, 'open_graph')} type="checkbox" id = 'open_graph' defaultChecked = {checked.open_graph} name = 'open_graph' value = 'ssl'/> 
                        <h5><label htmlFor="open_graph">Open graph</label></h5>
                        
                        
                    </li>
                    

                </ul>
                   



                </section>

            </div>

            <div className="calculator__right__inner">
                <div className="info__window">
                    

                    {information[info]}

                </div>

                <div className="price__and__order">
                <div className = 'price'> <h5>Итоговая цена:</h5> ≈ {totalPrice}₽</div>

                <Link to={`${url}/form`} className = 'show__form__button' >Оформить заявку</Link>
                </div>


            </div>

        </div>
    )
}

export default Calculator;