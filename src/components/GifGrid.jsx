import React, { useEffect, useState } from 'react'
import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const [images, setImages] = useState([]);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }

    useEffect(() => {      /* Llamamos la funcion en el useEffect para que se ejecute una sola vez, por el array de dependencia */
        getImages();
    }, [])


    return (
        <>
            <h3>{category}</h3>

            <ol>
                {
                    images.map(({ id, title }) => (
                        <li key={id}>{title}</li>
                    ))
                }

            </ol >
        </>
    )
}
