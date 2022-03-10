import {React, useState} from 'react';
import {BrowserRouter } from "react-router-dom";

import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ModalForm from './components/ModalForm/ModalForm';
import Modal from './components/Modal/Modal';

import './App.scss';

function App() {

  const [modalForm, setModalForm] = useState(false);
  const [modal, setModal] = useState(false);

  const openModalForm = () => {
    setModalForm(true);
  }

  const openModal = () => {
    setModalForm(false);
  }

  const handleSubmitModal = () => {
    setModal(false);
  }

  return (
    <BrowserRouter>
    {modalForm && <ModalForm setModal={setModal} setModalForm={setModalForm} />}
    {modal && <Modal handleSubmitModal={handleSubmitModal}/>}
    
      <main className='main'>
        <Header
          openModalForm={openModalForm}
        />
        <Content openModal={openModal} openModalForm={openModalForm}/>
      </main>
    </BrowserRouter>
  );
}

export default App;
