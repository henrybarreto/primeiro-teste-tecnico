import React, {useState} from 'react';
import axios from 'axios';

import './style.css';
import {ContextModal, ContextRepo} from '../../contexts';
import Confirmation from '../confirmation';


const Modal = () => {
    let {repository, setRepository} = React.useContext(ContextRepo);
    let {isModalOpen, setIsModalOpen} = React.useContext(ContextModal);
    let [email, setEmail] = useState('');
    let [emailSent, setEmailSent] = useState({status: 0});

    const modalEventEmailInput = (e) => {
        setEmail(e.target.value)
    };

    const modalEventSend = async (e) => {
        e.preventDefault();
        try {
            console.info('Requesting to the Back-end service...');
            setEmailSent({status: 2})
            if(!email) {
                console.error('E-mail could not be empty!')
                setEmailSent({status: 3})
            }
            await axios.post('http://10.0.0.104:3001/mail', {
                'repo': {
                    'name': repository.name,
                    'url': repository.url
                },
                'to': email
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Headers': 'Authorization',
                    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
                }
            });
            console.info('E-mail sent!');
            setEmailSent({status: 1});
        } catch (e) {
            console.error('Could not request the Back-end service');
            console.error(e);
            setEmailSent({status: 3})
        }
    }

    const modalEventClose = (_e) => {
        setIsModalOpen(false);
        setEmailSent({status: 0});
    };

    return (
        <>
            {isModalOpen &&
            <div className='modal_screen'>
                    <div className='modal'>
                        <button className='modal_close_button button' onClick={modalEventClose}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z' fill='rgba(255,255,255,1)'/></svg>                        </button>
                        <h2>{repository.name}</h2>
                        <h3>{repository.description}</h3>
                        <p>Send this repository to your E-Mail</p>
                        <form className='modal_form'>
                            <input className='modal_repo' type='hidden'/>
                            <label htmlFor='email'>E-Mail</label>
                            <input
                                className='modal_input'
                                name='email' type='email'
                                placeholder='Type your E-Mail'
                                onChange={modalEventEmailInput}
                            />
                            <input className='modal_submit button' type='submit' value='Send' onClick={modalEventSend}/>
                            <Confirmation value={emailSent} />
                        </form>
                    </div>
            </div>
            }
        </>
    );
}

export default Modal;