import React, {createContext} from 'react';

export const ContextRepo = createContext({
    name: '',
    description: '',
    url: ''
});
export const ContextModal = createContext({});
