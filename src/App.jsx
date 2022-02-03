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
    setModal(true);
    setModalForm(false);
  }

  const arr = [2, 34, 3, 8, 1, 5, 4]

  console.log(arr.sort().toString())

  return (
    <BrowserRouter>
    {modal && <Modal/>}
    {modalForm && <ModalForm openModal={openModal} />}
      <main className='main'>
        <Header
          openModalForm={openModalForm}
        />
        <Content/>
      </main>
    </BrowserRouter>
  );
}

export default App;
