import './App.css';
import './test.scss';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import React, { useState } from 'react';





function App() {
  const [isModalHidden, setModal] = useState(false);
  const [modalContent, setContent] = useState('');

    
    let modal = {
      isModal: isModalHidden,
      content: modalContent,
    

      setModalj: 
        (e, content) => {
      
        
        setContent(content);
        
          
        setModal(!isModalHidden);
        // setVisibility(!isNodeHidden ? 'hidden' : '');
          
        
        },

        setForm: (e) => {
          e.preventDefault();
          setContent('form');
        }
    } ;

  return (
    <div className="App">

      <Header show_modal =  {modal}/>
      <Content show_modal = {modal}/>
       <Footer show_modal = {modal}/> 

    </div>
  );
}

export default App;
