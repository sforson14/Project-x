import React, { useState } from 'react';
import "../assets/dashboard.css"
import {ToggleContainer} from "./theme/Toggle.styled"
import { ReactComponent as MoonIcon } from '../assets/images/moon.svg';
import { ReactComponent as SunIcon }  from  '../assets/images/sun.svg';

const ThemeSwitcher = ({ theme, toggleTheme }) => {
    const isLight = theme === 'light';
    return (
       <div className="switcher__panel">
           <ToggleContainer className="toggleBtn" lightTheme={isLight}  onClick={toggleTheme}>
               <SunIcon />
               <MoonIcon />
           </ToggleContainer>
       </div>
    )
}


export default ThemeSwitcher