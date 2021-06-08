import React from 'react';

import './style.css';

export default function Header() {
    /// This is not the best kind of image for a header, but is just as example.
    return (
        <>
            <header className='header'>
                <svg className='header_logo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='24' height='24'><path fill='none' d='M0 0h24v24H0z'/><path d='M13 21v2.5l-3-2-3 2V21h-.5A3.5 3.5 0 0 1 3 17.5V5a3 3 0 0 1 3-3h14a1 1 0 0 1 1 1v17a1 1 0 0 1-1 1h-7zm-6-2v-2h6v2h6v-3H6.5a1.5 1.5 0 0 0 0 3H7zM7 5v2h2V5H7zm0 3v2h2V8H7zm0 3v2h2v-2H7z' fill='rgba(255,127,80,1)'/></svg>
                <h1 className='header_title'>Public projects</h1>
            </header>
        </>
    );
}