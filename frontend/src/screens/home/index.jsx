import React, {useState,Dispatch} from 'react';
import Header from '../../components/header';
import Repos from '../../components/repos';
import Modal from '../../components/modal';

import {ContextModal, ContextRepo} from '../../contexts';

import './style.css';

export default function HomeScreen() {
    let [isModalOpen, setIsModalOpen] = useState(false);
    let [repository, setRepository] = useState({
        name: '',
        description: '',
        url: ''
    });

    return (
        <ContextRepo.Provider value={
            {
                repository,
                setRepository
            }
        }>
            <ContextModal.Provider value={{isModalOpen, setIsModalOpen}}>
                <Modal />
                <Header />
                <main className='main'>
                        <Repos />
                </main>
            </ContextModal.Provider>
        </ContextRepo.Provider>
    );
}

