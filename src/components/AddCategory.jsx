import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('')

    const onSubmit = (event) => {
        event.preventDefault();
        if (inputValue.trim().length <= 1) return;
        /*  setCategories(categories => [inputValue, ...categories]) */
        onNewCategory(inputValue.trim())
        setInputValue('')
    }

    const OnInputChange = (event) => {
        setInputValue(event.target.value);
    }


    return (

        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type='text'
                placeholder='Search Gifs'
                value={inputValue}
                onChange={OnInputChange}
            >

            </input>
        </form>
    )
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}