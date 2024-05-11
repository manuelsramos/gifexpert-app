import React from 'react'
import './GifGrid.css'


import GifItem from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { PropTypes } from 'prop-types';

export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs(category);



    return (
        <div className='searching'>
            <h3 className='category'>{category}</h3>
            {
                isLoading ? (<h2>Loading...</h2>)
                    : null
            }
            <div className='card-grid'>
                {
                    images.map((image) => (
                        <GifItem key={image.id}
                            title={image.title}
                            url={image.url}
                        />
                    ))
                }

            </div >
        </div>
    )
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired,
}