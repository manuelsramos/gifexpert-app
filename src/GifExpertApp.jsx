import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components/'

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([''])


    const onAddCategory = (onNewCategory) => {
        const cleanCategoryLower = onNewCategory.toLowerCase();
        const cleanCategoryUpper = onNewCategory.toUpperCase();
        if (categories.includes(cleanCategoryLower, cleanCategoryUpper)) return;
        setCategories([onNewCategory, ...categories])
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory /* setCategories={setCategories}
            */
                onNewCategory={event => onAddCategory(event)}
            />

            {/* Gif List */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }


        </>
    )
}