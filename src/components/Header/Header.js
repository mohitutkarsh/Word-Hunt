import React from 'react';
import './Header.css';
import MenuItem from "@material-ui/core/MenuItem";
import {TextField, createTheme, ThemeProvider} from '@material-ui/core';
import categories from "../../data/category";

const Header = ({ setCategory, category, word, setWord, setMeanings, LightMode }) => {
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: LightMode ? '#000' : '#fff'
            },
          type: LightMode ? 'light' : 'dark',
        },
      });

      const handleChange = (language) => {
        setCategory(language);
        setWord(" ");
        setMeanings([]);
      };

    return (
        <div className='header'>
            <span className="title">{word ? word : "Word Hunt"}</span>
            <div className='inputs'>
                <ThemeProvider theme={darkTheme}>
                <TextField 
                  className="search" 
                  label="Search a Word" 
                  label="Standard" 
                  value={word}
                  onChange={(e) => setWord(e.target.value)}
                  /> 
                <TextField
                  className="select"
                  id="standard-select-currency"
                  select
                  label="Language"
                  value={category}
                  onChange = {(e) => handleChange(e.target.value)}
                >
            {categories.map((option) => (
            <MenuItem key={option.label} value={option.label}>{option.value}</MenuItem>
            ))}
          
            
          
        </TextField>
                </ThemeProvider>            
            </div>
        </div>
    )
}

export default Header