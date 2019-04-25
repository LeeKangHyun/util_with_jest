import React, { useState } from 'react'

import './styles.scss'
import useTheme from './customHooks'

const themes = [
  {
    'button-border': 'none',
    'button-padding': '16px',
    'button-border-radius': '4px',
    'button-font-weight': 'normal',
    'button-font-size': '14px',
    'button-color': '#FFF',
    'button-background': '#6772e5',
    'button-text-transform': 'uppercase',
    'button-hover-border': 'none',
    'button-hover-color': '#fff',
    'button-hover-background': '#7795f8',
    'button-hover-transform': 'translateY(-2px)',
    'button-active-border': 'none',
    'button-active-color': '#e6ebf1',
    'button-active-background': '#555abf'
  },
  {
    'button-border': 'none',
    'button-padding': '20px 50px',
    'button-border-radius': '90px',
    'button-font-weight': 'normal',
    'button-font-size': '20px',
    'button-color': '#FFF',
    'button-background': 'linear-gradient(to right, #DD5E89 0%, #F7BB97 80%)',
    'button-text-transform': 'normal',
    'button-hover-border': 'none',
    'button-hover-color': '#fff',
    'button-hover-background':
      'linear-gradient(to right, #DD5E89 0%, #F7BB97 100%)',
    'button-hover-transform': 'scale(1.1)',
    'button-active-border': 'none',
    'button-active-color': '#fff',
    'button-active-background':
      'linear-gradient(to right, #DD5E89 0%, #F7BB97 100%)'
  },
  {
    'button-border': '1px solid #DDD',
    'button-padding': '10px',
    'button-border-radius': '0',
    'button-font-weight': 'normal',
    'button-font-size': '14px',
    'button-color': '#000',
    'button-background': '#FFF',
    'button-text-transform': 'normal',
    'button-hover-border': '1px solid #000',
    'button-hover-color': '#000',
    'button-hover-background': '#FFF',
    'button-hover-transform': 'none',
    'button-active-border': '1px solid #000',
    'button-active-color': '#000',
    'button-active-background': '#f7f7f7'
  }
];

const useThemeComponent = () => {
  const [themeIndex, setThemeIndex] = useState(0)
  useTheme(themes[themeIndex])
  
  return (
    <div className="main">
      <button className="button">Button</button>
      <div className="theme-changer">
        {themes.map((theme, i) => (
          <label key={i} htmlFor="theme">
            <input
              type="radio"
              name="theme"
              value={i}
              checked={themeIndex === i}
              onChange={() => setThemeIndex(i)}
            />
          </label>
        ))}
      </div>
    </div>
  )
}

export default useThemeComponent
