import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Loading from '../loading';

import './style.css';
import {ContextModal, ContextRepo} from '../../contexts';

export const Repos= () => {
    let {isModalOpen, setIsModalOpen} = React.useContext(ContextModal);
    let {repository, setRepository} = React.useContext(ContextRepo);

    let [repos, setRepos]= useState([]);

    useEffect( () => {
        try {
            (async () => {
                let reposFromGithub = await axios.get('https://api.github.com/repositories');
                let reposUtilForth = reposFromGithub.data.filter((repo, index) => {
                    return index < 4 ? true : false
                });
                console.log(reposUtilForth);
                setRepos(reposUtilForth);
            })()
        } catch (e) {
            console.error(e);
        }
    }, []);

    const modalEventOpen = (repo) => {
        setIsModalOpen(true);
        setRepository({
            name: repo.full_name,
            description: repo.description,
            url: repo.html_url});
    }

    if(repos.length === 0) {
        return <Loading />
    } else {
        return (<>
            {
                repos.map((repo) => {
                    return (
                        <div className='repo'>
                            <section className='repo_info'>
                                <h2 className='repo_name'>{repo.full_name}</h2>
                                <p className='repo_description'>{repo.description}</p>
                            </section>
                            <section className='repo_action'>
                                <button className='button repo_action_button' type='button' onClick={() => {
                                    modalEventOpen(repo)
                                }}>Share!</button>
                            </section>
                        </div>
                    );
                })
            }
        </>);
    }
}

export default Repos;
