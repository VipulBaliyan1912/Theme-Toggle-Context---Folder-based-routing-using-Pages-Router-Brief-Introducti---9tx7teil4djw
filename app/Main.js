'use client'
import React from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {

    return(
        <div className={`container bg-${theme}`} id="themed-page">
            <p id="themed-text-container" className={`txt-${theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn btn-${theme}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }