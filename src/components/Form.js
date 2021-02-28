import '../form.scss';
import { useEffect, useState } from 'react';
import InputMask from "react-input-mask";
import whatsapp_icon from "../images/icons/whatsapp-colored.png"





function Form(props) {

    const [name, setName] = useState('');
    const [organization, setOrganization] = useState('');
    const [theme, setTheme] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [comment, setComment] = useState('');
    const [communication, setCommunication] = useState('');

    
  
    



    

    function toggleMessenger(e,messenger){

        e.preventDefault();
        communication == messenger ?
        setCommunication(''):
        setCommunication(messenger);
        
        
        }

        let waChoosed = communication == 'WhatsApp' ? 'choosed' : '';
        let tgChoosed = communication == 'Telegram' ? 'choosed' : '' ;

        useEffect(()=> {})
        

    

    function handleChange(e,setState) {

            
            setState(e.target.value);
            
        
    }

    function focusInput(){
       
    }

    
  
    
   

    return(
        <div className="form">
            
            <form action="">
        <div className="form__input">

            <label  htmlFor="name">Контактное лицо</label>
            <input onChange={(e)=>handleChange(e, setName)} placeholder ='Имя (Фамилия)' maxLength={25} value = {name}  id = 'name' type="text"/>
        </div>

        <div className="form__input">
            <label  htmlFor="name">Организация</label>
            <input onChange={(e)=>handleChange(e, setOrganization)} placeholder = 'Название компании, ИП' maxLength={20} value = {organization}  id = 'name' type="text"/>
        </div>

        <div className="form__input">
            <label  htmlFor="name">Тематика сайта</label>
            <input onChange={(e)=>handleChange(e, setTheme)} placeHolder ='Пример: Маникюрный салон' maxLength={30} value = {theme}  id = 'name' type="text"/>

        </div>

        <div className="form__input phone__input">
            <label htmlFor="tel">Телефон</label>
            <div className = 'phone__apps'>
            <InputMask placeholder = '+7(___)-___-__-__' type ='tel'id = 'tel' className = 'masktel' mask="+7(999)-999-99-99" onChange={(e)=>handleChange(e, setPhoneNumber)} value={phoneNumber} />
            
            </div>
            <div className="way__communication">
                <label htmlFor="">Предпочтительный способ связи</label>
            <button onClick = {(e) => toggleMessenger(e, 'WhatsApp')} className = {'whapp__toogle__button' + ' '+ waChoosed }></button>
            <button onClick = {(e) => toggleMessenger(e, 'Telegram')} className = {'tg__toogle__button' + ' '+ tgChoosed }></button>
            <span>
                {communication}
            </span>
            </div>
        </div>

        <div className="form__input">
            <label  htmlFor="name">Вопрос/Комментарий</label>
            <textarea onChange={(e)=>handleChange(e, setComment)}  maxLength={180} value = {comment}  id = 'name' type="text"/>
        </div>

        <div className="input__submit">
            <input className = 'submit__button' type="submit" value = 'Отправить заявку'/>
        </div>

            </form>

            

        </div>
    )
}

export default Form;